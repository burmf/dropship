import { siteConfig } from "@/lib/site-config";

export default function FAQPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

            <div className="space-y-4">
                <details className="group border rounded-lg p-4 open:bg-muted/50">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                        What payment methods do you accept?
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <p className="mt-4 text-muted-foreground">
                        We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. All transactions are secure and encrypted.
                    </p>
                </details>

                <details className="group border rounded-lg p-4 open:bg-muted/50">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                        How long does shipping take?
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <p className="mt-4 text-muted-foreground">
                        Standard shipping normally takes 5-10 business days. International orders may take 10-20 business days to arrive depending on the destination.
                    </p>
                </details>

                <details className="group border rounded-lg p-4 open:bg-muted/50">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                        Do you offer international shipping?
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <p className="mt-4 text-muted-foreground">
                        Yes, we ship worldwide! Shipping costs will be calculated at checkout based on your location.
                    </p>
                </details>

                <details className="group border rounded-lg p-4 open:bg-muted/50">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                        What is your return policy?
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <p className="mt-4 text-muted-foreground">
                        We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.
                    </p>
                </details>

                <details className="group border rounded-lg p-4 open:bg-muted/50">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                        How can I contact customer support?
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <p className="mt-4 text-muted-foreground">
                        You can reach our support team at {siteConfig.company.email}. We aim to respond to all inquiries within 24 hours.
                    </p>
                </details>
            </div>
        </div>
    );
}
