"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Zap, Star } from "lucide-react";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const websitePlans = [
    {
        name: "Landing Page",
        price: "$150",
        popular: false,
        color: "#1E88FF",
        features: ["Single page design", "Lead capture form", "Mobile responsive", "SEO optimized", "Fast loading", "2 weeks support"],
    },
    {
        name: "Portfolio Website",
        price: "$200",
        popular: false,
        color: "#1E88FF",
        features: ["Up to 5 pages", "Gallery / portfolio", "Contact form", "Google Analytics", "Social integration", "1 month support"],
    },
    {
        name: "Business Website",
        price: "$400",
        popular: true,
        color: "#1E88FF",
        features: ["Up to 10 pages", "Content management", "Blog/news module", "WhatsApp chat", "SEO setup", "3 months support"],
    },
    {
        name: "Corporate Website",
        price: "$700",
        popular: false,
        color: "#1E88FF",
        features: ["Unlimited pages", "Multi-department", "Staff portal", "Advanced SEO", "Analytics dashboard", "6 months support"],
    },
];

const ecommercePlans = [
    {
        name: "Starter Store",
        price: "$1,000",
        popular: false,
        color: "#12C8E8",
        features: ["Up to 50 products", "M-Pesa integration", "Order management", "Inventory tracking", "Customer accounts", "3 months support"],
    },
    {
        name: "Business Store",
        price: "$1,250",
        popular: true,
        color: "#12C8E8",
        features: ["Up to 500 products", "Multiple payments", "Discount codes", "Abandoned cart", "Seller dashboard", "6 months support"],
    },
    {
        name: "Enterprise Store",
        price: "$2,550",
        popular: false,
        color: "#12C8E8",
        features: ["Unlimited products", "Multi-vendor", "Custom analytics", "API integrations", "Priority support", "12 months support"],
    },
];

const customSolutions = [
    { name: "School Management System", icon: "🏫", features: ["Student records & grades", "Fee collection & receipts", "Timetable management", "Parent/student portal", "SMS & email alerts", "Custom reporting"] },
    { name: "Hospital Management System", icon: "🏥", features: ["Patient records (EMR)", "Appointment system", "Pharmacy & lab modules", "Billing & invoicing", "Insurance claims", "Doctor portal"] },
    { name: "Insurance Management", icon: "🛡️", features: ["Policy management", "Claims processing", "Agent onboarding", "Underwriting tools", "Compliance reporting", "API integrations"] },
    { name: "ERP / CRM / SaaS", icon: "⚙️", features: ["Business process automation", "Multi-role dashboards", "Inventory & finance", "Customer management", "Custom workflows", "Cloud deployment"] },
];

function PricingCard({
    name, price, popular, color, features,
}: {
    name: string; price: string; popular: boolean; color: string; features: string[];
}) {
    return (
        <div
            className="card-hover"
            style={{
                padding: "32px",
                borderRadius: "20px",
                background: popular
                    ? `linear-gradient(135deg, ${color}0e 0%, ${color}1a 100%)`
                    : "var(--card)",
                border: popular ? `2px solid ${color}` : "1.5px solid var(--border)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {popular && (
                <div style={{
                    position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
                    background: `linear-gradient(135deg, ${color}, #12C8E8)`,
                    color: "white", fontSize: "0.75rem", fontWeight: 700,
                    padding: "4px 18px", borderRadius: "999px",
                    display: "flex", alignItems: "center", gap: "5px",
                    whiteSpace: "nowrap",
                }}>
                    <Star size={12} fill="white" /> Most Popular
                </div>
            )}
            <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "8px", color: "var(--foreground)" }}>{name}</h3>
            <div style={{ marginBottom: "24px" }}>
                <span style={{ fontSize: "2.4rem", fontWeight: 900, color }}>{price}</span>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                {features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.88rem", color: "var(--foreground)" }}>
                        <CheckCircle size={14} style={{ color, flexShrink: 0 }} />
                        {f}
                    </li>
                ))}
            </ul>
            <Link
                href="/contact#request"
                className="btn-primary"
                style={{
                    marginTop: "28px",
                    background: popular ? `linear-gradient(135deg, ${color}, #12C8E8)` : "transparent",
                    color: popular ? "white" : color,
                    border: popular ? "none" : `2px solid ${color}`,
                    boxShadow: popular ? `0 4px 20px ${color}40` : "none",
                    justifyContent: "center",
                }}
            >
                Get Started <ArrowRight size={15} />
            </Link>
        </div>
    );
}

export default function PricingPage() {
    return (
        <>
            {/* Hero */}
            <section style={{
                background: "linear-gradient(135deg, #062B6F 0%, #1E88FF 70%, #12C8E8 100%)",
                padding: "140px 0 96px", textAlign: "center",
            }}>
                <div className="container-xl">
                    <motion.div initial="hidden" animate="show" variants={stagger}>
                        <motion.div variants={fadeUp}><span className="badge" style={{ background: "rgba(18,200,232,0.15)", color: "#12C8E8", border: "1px solid rgba(18,200,232,0.3)", marginBottom: "20px" }}>
                            <Zap size={12} style={{ display: "inline", marginRight: "4px" }} />Transparent Pricing
                        </span></motion.div>
                        <motion.h1 variants={fadeUp} style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "white", marginBottom: "20px", letterSpacing: "-0.025em" }}>
                            Simple, Transparent <span style={{ color: "#12C8E8" }}>Pricing</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", maxWidth: "560px", margin: "0 auto" }}>
                            No hidden fees, no surprises. Choose the package that fits your needs or request a custom quote.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Website Dev Pricing */}
            <section className="section-py">
                <div className="container-xl">
                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "48px" }}>
                        <motion.div variants={fadeUp}><span className="badge badge-primary" style={{ marginBottom: "12px" }}>Website Development</span></motion.div>
                        <motion.h2 variants={fadeUp} className="section-heading">Website <span className="gradient-text">Packages</span></motion.h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "24px" }}>
                        {websitePlans.map((plan) => (
                            <motion.div key={plan.name} variants={fadeUp}>
                                <PricingCard {...plan} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* E-Commerce Pricing */}
            <section className="section-py" style={{ background: "var(--muted)" }}>
                <div className="container-xl">
                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "48px" }}>
                        <motion.div variants={fadeUp}><span className="badge badge-primary" style={{ marginBottom: "12px" }}>E-Commerce</span></motion.div>
                        <motion.h2 variants={fadeUp} className="section-heading">Online Store <span className="gradient-text">Plans</span></motion.h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px", margin: "0 auto" }}>
                        {ecommercePlans.map((plan) => (
                            <motion.div key={plan.name} variants={fadeUp}>
                                <PricingCard {...plan} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Custom Solutions */}
            <section className="section-py">
                <div className="container-xl">
                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "48px" }}>
                        <motion.div variants={fadeUp}><span className="badge badge-primary" style={{ marginBottom: "12px" }}>Enterprise</span></motion.div>
                        <motion.h2 variants={fadeUp} className="section-heading">Custom <span className="gradient-text">Solutions</span></motion.h2>
                        <motion.p variants={fadeUp} className="section-subheading" style={{ margin: "16px auto 0" }}>
                            Complex systems are priced based on scope, features, and integrations. Contact us for a detailed quote.
                        </motion.p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
                        {customSolutions.map(({ name, icon, features }) => (
                            <motion.div key={name} variants={fadeUp}>
                                <div className="card-hover" style={{
                                    padding: "28px", borderRadius: "18px",
                                    background: "var(--card)", border: "1.5px solid var(--border)",
                                    height: "100%", display: "flex", flexDirection: "column",
                                }}>
                                    <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>{icon}</div>
                                    <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "8px", color: "var(--foreground)" }}>{name}</h3>
                                    <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1E88FF", marginBottom: "16px" }}>Custom Quote</div>
                                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px", flex: 1 }}>
                                        {features.map((f) => (
                                            <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.87rem", color: "var(--muted-foreground)" }}>
                                                <CheckCircle size={13} style={{ color: "#1E88FF", flexShrink: 0 }} /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact#request" className="btn-primary" style={{ marginTop: "20px", justifyContent: "center", fontSize: "0.88rem", padding: "10px 16px" }}>
                                        Request Quote <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ note */}
            <section style={{ background: "linear-gradient(135deg, #062B6F 0%, #1E88FF 60%, #12C8E8 100%)", padding: "80px 0", textAlign: "center" }}>
                <div className="container-xl">
                    <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "white", marginBottom: "12px" }}>Not Sure Which Plan?</h2>
                    <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "32px", fontSize: "1rem" }}>Let&apos;s talk about your project. We&apos;ll recommend the best approach for your goals and budget.</p>
                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn-primary" style={{ background: "white", color: "#062B6F" }}>
                            Get Free Consultation <ArrowRight size={18} />
                        </Link>
                        <Link href="https://wa.me/254729596966" target="_blank" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
                            Chat on WhatsApp
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
