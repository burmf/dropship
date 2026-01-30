import { siteConfig } from "@/lib/site-config";

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">1. Information Collection</h2>
                <p className="mb-4">
                    We collect information from you when you register on our site, place an order, subscribe to our newsletter or fill out a form on {siteConfig.name}.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">2. Information Usage</h2>
                <p className="mb-4">
                    Any of the information we collect from you may be used to personalize your experience, improve our website, improve customer service, and process transactions.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">3. Information Protection</h2>
                <p className="mb-4">
                    We implement a variety of security measures to maintain the safety of your personal information when you place an order or access your personal information.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">4. Contact Us</h2>
                <p>
                    If there are any questions regarding this privacy policy, you may contact us using the information below:<br />
                    {siteConfig.company.email}
                </p>
            </div>
        </div>
    );
}
