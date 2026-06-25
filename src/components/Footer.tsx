"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, MessageCircle, Rss, Share2, ArrowRight } from "lucide-react";

const footerLinks = {
    Services: [
        { label: "Website Development", href: "/services#web" },
        { label: "E-Commerce", href: "/services#ecommerce" },
        { label: "Custom Software", href: "/services#software" },
        { label: "Mobile Apps", href: "/services#mobile" },
        { label: "Networking & ISP", href: "/services#networking" },
        { label: "Cloud & Security", href: "/services#cloud" },
    ],
    Company: [
        { label: "About Us", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" },
        { label: "Request Project", href: "/contact#request" },
    ],
};

export default function Footer() {
    return (
        <footer style={{ background: "#070d1a", color: "#e2e8f0", paddingTop: "80px" }}>
            <div className="container-xl">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "48px",
                        paddingBottom: "60px",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                >
                    {/* Brand */}
                    <div style={{ gridColumn: "span 1" }}>
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                alt="PrimeLink Technologies"
                                width={220}
                                height={120}
                                style={{ height: "120px", width: "auto", marginBottom: "-15px", marginTop: "-35px", filter: "brightness(0) invert(1)", objectFit: "contain", marginLeft: "-20px" }}
                            />
                        </Link>
                        <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#94a3b8", marginBottom: "24px" }}>
                            Connecting Innovation, Empowering Business. Your trusted partner for digital transformation in Kenya and beyond.
                        </p>
                        <div style={{ display: "flex", gap: "12px" }}>
                            {[Globe, MessageCircle, Rss, Share2].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    style={{
                                        width: "38px", height: "38px",
                                        borderRadius: "10px",
                                        background: "rgba(30, 136, 255, 0.12)",
                                        border: "1px solid rgba(30, 136, 255, 0.2)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "#1E88FF",
                                        transition: "all 0.2s",
                                        textDecoration: "none",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(30, 136, 255, 0.3)";
                                        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(30, 136, 255, 0.12)";
                                        (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                                    }}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <h4 style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#1E88FF", marginBottom: "20px" }}>
                                {section}
                            </h4>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                color: "#94a3b8",
                                                textDecoration: "none",
                                                fontSize: "0.9rem",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "6px",
                                                transition: "color 0.2s",
                                            }}
                                            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#1E88FF")}
                                            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#94a3b8")}
                                        >
                                            <ArrowRight size={12} />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#1E88FF", marginBottom: "20px" }}>
                            Contact
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            {[
                                { Icon: Phone, text: "0729 596 966", href: "tel:0729596966" },
                                { Icon: Phone, text: "0113 697 897", href: "tel:0113697897" },
                                { Icon: Mail, text: "info@primelink.co.ke", href: "mailto:info@primelink.co.ke" },
                                { Icon: MapPin, text: "Nairobi, Kenya", href: "#" },
                            ].map(({ Icon, text, href }) => (
                                <a
                                    key={text}
                                    href={href}
                                    style={{ display: "flex", alignItems: "center", gap: "10px", color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#1E88FF")}
                                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
                                >
                                    <Icon size={16} style={{ color: "#1E88FF", flexShrink: 0 }} />
                                    {text}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 0",
                    flexWrap: "wrap",
                    gap: "12px",
                }}>
                    <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
                        © {new Date().getFullYear()} PrimeLink Technologies. All rights reserved.
                    </p>
                    <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
                        Connecting Innovation, Empowering Business
                    </p>
                </div>
            </div>
        </footer>
    );
}
