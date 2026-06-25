"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Code2, Smartphone, Network, Shield, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const services = [
    {
        id: "web",
        icon: Globe,
        color: "#1E88FF",
        title: "Website Development",
        description: "We design and build stunning, high-performance websites that captivate visitors and drive conversions. From portfolio sites to complex corporate portals.",
        packages: [
            { name: "Portfolio Website", price: "$200", features: ["Up to 5 pages", "Responsive design", "Contact form", "SEO optimized", "1 month support"] },
            { name: "Business Website", price: "$400", features: ["Up to 10 pages", "Content management", "Blog integration", "Analytics setup", "3 months support"] },
            { name: "Corporate Website", price: "$700", features: ["Unlimited pages", "Multi-language", "Staff portal", "Advanced SEO", "6 months support"] },
            { name: "Landing Page", price: "$150", features: ["Single page", "Lead capture form", "A/B test ready", "Lightning fast", "2 weeks support"] },
        ],
    },
    {
        id: "ecommerce",
        icon: ShoppingCart,
        color: "#12C8E8",
        title: "E-Commerce Development",
        description: "Build powerful online stores that sell 24/7. From small boutiques to large enterprise marketplaces with full payment integration.",
        packages: [
            { name: "Starter Store", price: "$1,000", features: ["Up to 50 products", "Payment integration", "Order management", "Inventory tracking", "3 months support"] },
            { name: "Business Store", price: "$1,250", features: ["Up to 500 products", "Multiple payments", "Customer accounts", "Discount system", "6 months support"] },
            { name: "Enterprise Store", price: "$2,550", features: ["Unlimited products", "Multi-vendor", "Custom analytics", "API integrations", "12 months support"] },
        ],
    },
    {
        id: "software",
        icon: Code2,
        color: "#062B6F",
        title: "Custom Software Development",
        description: "Enterprise-grade systems designed specifically for your business processes. Automate workflows, manage data, and scale your operations effortlessly.",
        packages: [
            { name: "School Management System", price: "Custom Quote", features: ["Student records", "Fee management", "Timetabling", "Parent portal", "Reporting"] },
            { name: "Hospital Management System", price: "Custom Quote", features: ["Patient records", "Appointment booking", "Pharmacy module", "Billing", "Lab integration"] },
            { name: "Insurance System", price: "Custom Quote", features: ["Policy management", "Claims processing", "Agent portal", "Reports", "API integrations"] },
            { name: "ERP / CRM / SaaS", price: "Custom Quote", features: ["Business process automation", "Multi-user roles", "Custom dashboards", "Data analytics", "Cloud deployment"] },
        ],
    },
    {
        id: "mobile",
        icon: Smartphone,
        color: "#1E88FF",
        title: "Mobile App Development",
        description: "Engaging, fast, and user-friendly mobile applications for Android, iOS, or both — built with cross-platform technologies for maximum reach.",
        packages: [
            { name: "Android App", price: "Custom Quote", features: ["Material design", "Push notifications", "Offline mode", "Google Play ready", "Support included"] },
            { name: "iOS App", price: "Custom Quote", features: ["Human Interface design", "App Store ready", "Face ID support", "Swift/React Native", "Support included"] },
            { name: "Cross-Platform App", price: "Custom Quote", features: ["Single codebase", "Android + iOS", "Native performance", "Lower cost", "Faster delivery"] },
        ],
    },
    {
        id: "networking",
        icon: Network,
        color: "#12C8E8",
        title: "Networking & ISP Solutions",
        description: "End-to-end networking infrastructure for ISPs, businesses and campuses. MikroTik experts providing robust, scalable connectivity solutions.",
        packages: [
            { name: "MikroTik Configuration", price: "Custom Quote", features: ["Router setup", "Firewall rules", "Bandwidth management", "VLAN setup", "Documentation"] },
            { name: "Hotspot System", price: "Custom Quote", features: ["Captive portal", "Voucher management", "User authentication", "Revenue tracking", "Monitoring"] },
            { name: "PPPoE / ISP Infrastructure", price: "Custom Quote", features: ["ISP billing setup", "PPPoE server", "Radius integration", "Network monitoring", "SLA support"] },
        ],
    },
    {
        id: "cloud",
        icon: Shield,
        color: "#062B6F",
        title: "Cloud & Cybersecurity",
        description: "Secure, scalable cloud infrastructure and proactive cybersecurity services to protect your business and data in an ever-evolving threat landscape.",
        packages: [
            { name: "VPS & Cloud Deployment", price: "Custom Quote", features: ["Server provisioning", "Docker/K8s setup", "SSL certificates", "Auto-backups", "Uptime monitoring"] },
            { name: "Security Audit", price: "Custom Quote", features: ["Vulnerability scan", "Penetration testing", "Compliance check", "Remediation plan", "Executive report"] },
            { name: "Server Management", price: "Custom Quote", features: ["24/7 monitoring", "Patch management", "Performance tuning", "Security hardening", "Monthly reports"] },
        ],
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section style={{
                background: "linear-gradient(135deg, #062B6F 0%, #1E88FF 70%, #12C8E8 100%)",
                padding: "140px 0 96px",
                textAlign: "center",
            }}>
                <div className="container-xl">
                    <motion.div initial="hidden" animate="show" variants={stagger}>
                        <motion.div variants={fadeUp}><span className="badge" style={{ background: "rgba(18,200,232,0.15)", color: "#12C8E8", border: "1px solid rgba(18,200,232,0.3)", marginBottom: "20px" }}>Our Services</span></motion.div>
                        <motion.h1 variants={fadeUp} style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "white", marginBottom: "20px", letterSpacing: "-0.025em" }}>
                            Comprehensive Technology <br />Solutions
                        </motion.h1>
                        <motion.p variants={fadeUp} style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", maxWidth: "560px", margin: "0 auto" }}>
                            From concept to deployment — we bring your digital ideas to life with precision, speed, and craftsmanship.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            {services.map(({ id, icon: Icon, color, title, description, packages }, index) => (
                <section
                    key={id}
                    id={id}
                    className="section-py"
                    style={{ background: index % 2 === 0 ? "var(--background)" : "var(--muted)" }}
                >
                    <div className="container-xl">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            variants={stagger}
                            viewport={{ once: true }}
                        >
                            {/* Section header */}
                            <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                                <div style={{
                                    width: "56px", height: "56px", borderRadius: "16px",
                                    background: `${color}18`, border: `1.5px solid ${color}30`,
                                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                                }}>
                                    <Icon size={28} style={{ color }} />
                                </div>
                                <div>
                                    <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--foreground)", letterSpacing: "-0.02em" }}>{title}</h2>
                                </div>
                            </motion.div>

                            <motion.p variants={fadeUp} style={{ color: "var(--muted-foreground)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "600px", marginBottom: "40px" }}>
                                {description}
                            </motion.p>

                            {/* Package cards */}
                            <motion.div variants={stagger} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
                                {packages.map(({ name, price, features }) => (
                                    <motion.div key={name} variants={fadeUp}>
                                        <div
                                            className="card-hover"
                                            style={{
                                                padding: "28px", borderRadius: "18px",
                                                background: "var(--card)",
                                                border: `1.5px solid ${color}25`,
                                                height: "100%",
                                                display: "flex", flexDirection: "column",
                                            }}
                                        >
                                            <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "8px", color: "var(--foreground)" }}>{name}</h3>
                                            <div style={{ fontSize: "1.4rem", fontWeight: 800, color, marginBottom: "20px" }}>{price}</div>
                                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px", flex: 1 }}>
                                                {features.map((f) => (
                                                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "var(--muted-foreground)" }}>
                                                        <CheckCircle size={14} style={{ color, flexShrink: 0 }} />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link href="/contact#request" className="btn-primary" style={{ marginTop: "24px", background: `${color}`, boxShadow: `0 4px 16px ${color}40`, fontSize: "0.88rem", padding: "10px 16px", justifyContent: "center" }}>
                                                Get Started <ArrowRight size={15} />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section style={{ background: "linear-gradient(135deg, #062B6F 0%, #1E88FF 60%, #12C8E8 100%)", padding: "80px 0", textAlign: "center" }}>
                <div className="container-xl">
                    <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, color: "white", marginBottom: "12px" }}>Need a Custom Solution?</h2>
                    <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "32px", fontSize: "1.05rem" }}>Let&apos;s discuss your unique requirements and build something extraordinary together.</p>
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact#request" className="btn-primary" style={{ background: "white", color: "#062B6F" }}>
                            Request a Quote <ArrowRight size={18} />
                        </Link>
                        <Link href="https://wa.me/254729596966" target="_blank" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
                            WhatsApp Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
