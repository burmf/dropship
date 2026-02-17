import { NextResponse } from "next/server";
import Stripe from "stripe";

// 環境変数チェック
if (!process.env.STRIPE_SECRET_KEY) {
    console.error("STRIPE_SECRET_KEY is not set in environment variables.");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: Request) {
    try {
        const { items } = await req.json();

        if (!items || items.length === 0) {
            return NextResponse.json({ error: "カートが空です" }, { status: 400 });
        }

        const lineItems = items.map((item: any) => ({
            price_data: {
                currency: "jpy",
                product_data: {
                    name: `${item.name}${item.selectedSize ? ` (${item.selectedSize})` : ""}${item.selectedColor ? ` (${item.selectedColor})` : ""}`,
                    images: item.images && item.images.length > 0 ? [
                        item.images[0].startsWith('http')
                            ? item.images[0]
                            : `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}${item.images[0].startsWith('/') ? '' : '/'}${item.images[0]}`
                    ] : [],
                },
                unit_amount: item.price,
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/`,
            shipping_address_collection: {
                allowed_countries: ["JP"],
            },
            billing_address_collection: "required",
            customer_creation: "always", // 顧客情報を常に保存
        });

        return NextResponse.json({
            url: session.url
        });
    } catch (err: any) {
        console.error("Stripe Session Error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
