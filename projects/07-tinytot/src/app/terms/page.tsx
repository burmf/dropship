import { siteConfig } from "@/lib/site-config";

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">1. Introduction</h2>
                <p className="mb-4">
                    Welcome to {siteConfig.name}. By accessing our website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">2. Use License</h2>
                <p className="mb-4">
                    Permission is granted to temporarily download one copy of the materials (information or software) on {siteConfig.company.name}'s website for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">3. Pricing and Payment</h2>
                <p className="mb-4">
                    All prices are in {siteConfig.currency}. We reserve the right to change prices at any time without notice.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">4. Governing Law</h2>
                <p className="mb-4">
                    These terms and conditions are governed by and construed in accordance with the laws of Australia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">5. Contact</h2>
                <p>
                    Questions about the Terms of Service should be sent to us at {siteConfig.company.email}.
                </p>
            </div>
        </div>
    );
}
