import { siteConfig } from "@/lib/site-config";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
            <div className="prose prose-lg mx-auto">
                <p className="mb-6 text-xl text-center text-muted-foreground">{siteConfig.description}</p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
                <p className="mb-6">
                    At {siteConfig.name}, we believe in bringing you the best products that enhance your lifestyle.
                    Our mission is to provide high-quality items that combine functionality with exceptional design.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">Who We Are</h2>
                <p className="mb-6">
                    {siteConfig.company.name} is a dedicated team based in Australia, committed to sourcing the finest products from around the globe.
                    We carefully curate our collection to ensure every item meets our strict standards for quality and durability.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-4">Contact Us</h2>
                <p>
                    Address: {siteConfig.company.address}<br />
                    Email: <a href={`mailto:${siteConfig.company.email}`} className="text-primary hover:underline">{siteConfig.company.email}</a>
                </p>
            </div>
        </div>
    );
}
