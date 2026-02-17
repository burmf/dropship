import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

// Webhookの署名検証のためのシークレット
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not set");
        return NextResponse.json({ error: "Configuration Error" }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.text();
    const sig = req.headers.get("stripe-signature") as string;

    let event: Stripe.Event;

    try {
        if (!sig || !endpointSecret) {
            throw new Error("Missing stripe-signature or STRIPE_WEBHOOK_SECRET");
        }
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err: any) {
        console.error(`Webhook Error: ${err.message}`);
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    // 決済完了イベントを処理
    if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session;

        // 注文情報の詳細を取得
        const customerEmail = session.customer_details?.email;
        const customerName = session.customer_details?.name || "お客様";
        const amountTotal = session.amount_total ? session.amount_total / 1 : 0;
        const currencyDisplay = "円"; // JPYを「円」に固定

        // 配送先情報の安全な取得 (型エラー回避のため any キャストまたはプロパティチェック)
        const shipping = (session as any).shipping_details;
        const address = shipping?.address;
        const addressText = address
            ? `${address.postal_code || ''} ${address.state || ''}${address.city || ''}${address.line1 || ''}`
            : "記載なし";

        try {
            // 顧客への注文確認メール送信
            if (customerEmail) {
                await resend.emails.send({
                    from: "YoruHeya <info@yoruheya.jp>",
                    to: customerEmail,
                    subject: "【YoruHeya】ご注文ありがとうございます",
                    html: `
                        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
                            <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">ご注文ありがとうございます</h2>
                            <p>${customerName} 様</p>
                            <p>この度は YoruHeya をご利用いただき、誠にありがとうございます。</p>
                            <p>下記の内容でご注文を承りました。商品の発送準備が整い次第、追跡番号を添えて改めてご連絡させていただきます。</p>
                            
                            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
                                <p style="margin: 0; font-weight: bold;">[注文概要]</p>
                                <p style="margin: 5px 0;">お支払い合計: ${amountTotal.toLocaleString()} ${currencyDisplay}</p>
                                <p style="margin: 5px 0;">配送先: ${addressText}</p>
                            </div>

                            <p style="font-size: 14px; color: #666;">
                                ※海外提携倉庫より直送のため、お届けまで通常1〜2週間程度お時間をいただいております。<br>
                                ご不明な点がございましたら、本メールへの返信または info@yoruheya.jp までお気軽にお問い合わせください。
                            </p>
                        </div>
                    `,
                });
            }

            // 管理者への通知メール送信
            await resend.emails.send({
                from: "YoruHeya <info@yoruheya.jp>",
                to: "info@yoruheya.jp",
                subject: `【新規受注】${customerName} 様から注文が入りました`,
                html: `
                    <h2>新規受注通知</h2>
                    <p><strong>顧客名:</strong> ${customerName}</p>
                    <p><strong>メールアドレス:</strong> ${customerEmail}</p>
                    <p><strong>合計金額:</strong> ${amountTotal.toLocaleString()} ${currencyDisplay}</p>
                    <p><strong>配送先住所:</strong> ${addressText}</p>
                    <p><strong>StripeセッションID:</strong> ${session.id}</p>
                    <hr />
                    <p>詳細はStripe管理画面の「支払い」または「顧客」から確認してください。</p>
                `,
            });

            return NextResponse.json({ received: true });
        } catch (mailErr: any) {
            console.error("Email Sending Error:", mailErr);
            return NextResponse.json({ error: "Email Sending Error" }, { status: 500 });
        }
    }

    return NextResponse.json({ received: true });
}

