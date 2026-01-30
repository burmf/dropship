import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container px-4 py-8 md:py-12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">{siteConfig.name}</h3>
                        <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Shop</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-foreground">All Products</Link></li>
                            <li><Link href="/products" className="hover:text-foreground">New Arrivals</Link></li>
                            <li><Link href="/products?sort=sales" className="hover:text-foreground">Best Sellers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
