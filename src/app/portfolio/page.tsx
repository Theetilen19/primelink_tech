"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Code2, Server, Wifi, ShieldCheck, Smartphone, ShoppingBag } from "lucide-react";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

type Category = "All" | "Web" | "Software" | "Mobile" | "Networking" | "E-Commerce";

const categories: Category[] = ["All", "Web", "Software", "Mobile", "Networking", "E-Commerce"];

const projects = [
    {
        id: 1,
        title: "PrimeLink Hotspot System",
        category: "Networking" as Category,
        icon: Wifi,
        color: "#12C8E8",
        description: "A comprehensive hotspot management system with captive portal, voucher generation, and real-time revenue tracking for ISPs.",
        technologies: ["MikroTik", "PHP", "MySQL", "Bootstrap"],
        features: ["Voucher management", "Real-time monitoring", "Revenue reports", "Multi-location support"],
        gradient: "linear-gradient(135deg, #062B6F 0%, #12C8E8 100%)",
    },
    {
        id: 2,
        title: "ISP Billing Platform",
        category: "Software" as Category,
        icon: Server,
        color: "#1E88FF",
        description: "Full-featured ISP client management and billing platform with automated invoicing, PPPoE integration, and customer portal.",
        technologies: ["Laravel", "Vue.js", "PostgreSQL", "RADIUS"],
        features: ["Automated billing", "PPPoE integration", "Customer portal", "SMS notifications"],
        gradient: "linear-gradient(135deg, #1E88FF 0%, #062B6F 100%)",
    },
    {
        id: 3,
        title: "School Management System",
        category: "Software" as Category,
        icon: Code2,
        color: "#062B6F",
        description: "End-to-end school administration platform managing student records, fee collection, timetables, and parent communication.",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
        features: ["Student records", "Fee collection", "SMS/email alerts", "Parent portal"],
        gradient: "linear-gradient(135deg, #062B6F 0%, #1E88FF 100%)",
    },
    {
        id: 4,
        title: "Hospital Management System",
        category: "Software" as Category,
        icon: ShieldCheck,
        color: "#12C8E8",
        description: "Comprehensive hospital information system covering patient management, appointments, pharmacy, lab, and billing.",
        technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
        features: ["Patient records", "Appointment booking", "Lab integration", "Pharmacy module"],
        gradient: "linear-gradient(135deg, #0d6e8a 0%, #12C8E8 100%)",
    },
    {
        id: 5,
        title: "Insurance Management System",
        category: "Software" as Category,
        icon: ShieldCheck,
        color: "#1E88FF",
        description: "Policy lifecycle management platform for insurance companies with agent onboarding, claims processing, and compliance reporting.",
        technologies: ["Angular", "Spring Boot", "MySQL", "Docker"],
        features: ["Policy management", "Claims processing", "Agent portal", "Compliance reports"],
        gradient: "linear-gradient(135deg, #1E88FF 0%, #12C8E8 100%)",
    },
    {
        id: 6,
        title: "E-Commerce Platform",
        category: "E-Commerce" as Category,
        icon: ShoppingBag,
        color: "#12C8E8",
        description: "Multi-vendor e-commerce marketplace with M-Pesa & Stripe payment integration, inventory management, and seller analytics.",
        technologies: ["Next.js", "Stripe", "M-Pesa", "Prisma"],
        features: ["Multi-vendor", "M-Pesa/Stripe", "Inventory mgmt", "Seller analytics"],
        gradient: "linear-gradient(135deg, #12C8E8 0%, #1E88FF 100%)",
    },
    {
        id: 7,
        title: "PrimeLink Corporate Website",
        category: "Web" as Category,
        icon: Code2,
        color: "#1E88FF",
        description: "A premium corporate website for a technology firm with dark mode, framer motion animations, and smart contact forms.",
        technologies: ["Next.js 15", "TypeScript", "Framer Motion", "Resend"],
        features: ["Dark mode", "SEO optimized", "Contact forms", "Scroll animations"],
        gradient: "linear-gradient(135deg, #1E88FF 0%, #062B6F 100%)",
    },
    {
        id: 8,
        title: "Mobile Banking App",
        category: "Mobile" as Category,
        icon: Smartphone,
        color: "#12C8E8",
        description: "Cross-platform mobile banking application with biometric authentication, real-time balance notifications, and secure transfers.",
        technologies: ["React Native", "Node.js", "Firebase", "Plaid API"],
        features: ["Biometric auth", "Real-time alerts", "QR payments", "Transaction history"],
        gradient: "linear-gradient(135deg, #12C8E8 0%, #062B6F 100%)",
    },
];

export default function PortfolioPage() {
    const [active, setActive] = useState<Category>("All");

    const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

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
                        <motion.div variants={fadeUp}><span className="badge" style={{ background: "rgba(18,200,232,0.15)", color: "#12C8E8", border: "1px solid rgba(18,200,232,0.3)", marginBottom: "20px" }}>Our Work</span></motion.div>
                        <motion.h1 variants={fadeUp} style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "white", marginBottom: "20px", letterSpacing: "-0.025em" }}>
                            Projects That <span style={{ color: "#12C8E8" }}>Define Us</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", maxWidth: "560px", margin: "0 auto" }}>
                            Explore our diverse portfolio of impactful digital solutions delivered across multiple industries.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Portfolio */}
            <section className="section-py">
                <div className="container-xl">
                    {/* Filter tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "48px" }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                style={{
                                    padding: "9px 22px",
                                    borderRadius: "999px",
                                    border: active === cat ? "none" : "1.5px solid var(--border)",
                                    background: active === cat ? "linear-gradient(135deg, #1E88FF, #12C8E8)" : "var(--card)",
                                    color: active === cat ? "white" : "var(--muted-foreground)",
                                    fontWeight: 600,
                                    fontSize: "0.88rem",
                                    cursor: "pointer",
                                    transition: "all 0.25s ease",
                                    boxShadow: active === cat ? "0 4px 16px rgba(30,136,255,0.35)" : "none",
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>

                    {/* Grid */}
                    <motion.div
                        key={active}
                        initial="hidden"
                        animate="show"
                        variants={stagger}
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "28px" }}
                    >
                        {filtered.map(({ id, title, category, icon: Icon, color, description, technologies, features, gradient }) => (
                            <motion.div key={id} variants={fadeUp}>
                                <div
                                    className="card-hover"
                                    style={{
                                        borderRadius: "20px",
                                        overflow: "hidden",
                                        background: "var(--card)",
                                        border: "1.5px solid var(--border)",
                                        height: "100%", display: "flex", flexDirection: "column",
                                    }}
                                >
                                    {/* Image / gradient banner */}
                                    <div style={{
                                        height: "180px", background: gradient,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        position: "relative",
                                    }}>
                                        <div style={{
                                            width: "72px", height: "72px", borderRadius: "20px",
                                            background: "rgba(255,255,255,0.15)",
                                            border: "1.5px solid rgba(255,255,255,0.25)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                        }}>
                                            <Icon size={36} style={{ color: "white" }} />
                                        </div>
                                        <span style={{
                                            position: "absolute", top: "14px", right: "14px",
                                            background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
                                            border: "1px solid rgba(255,255,255,0.25)",
                                            borderRadius: "999px", padding: "4px 12px",
                                            fontSize: "0.75rem", fontWeight: 600, color: "white",
                                        }}>
                                            {category}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                                        <h3 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: "10px", color: "var(--foreground)" }}>{title}</h3>
                                        <p style={{ fontSize: "0.88rem", color: "var(--muted-foreground)", lineHeight: 1.65, marginBottom: "16px", flex: 1 }}>{description}</p>

                                        {/* Features */}
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                                            {features.map((f) => (
                                                <span key={f} style={{ fontSize: "0.75rem", padding: "3px 10px", borderRadius: "999px", background: `${color}14`, color, border: `1px solid ${color}25` }}>{f}</span>
                                            ))}
                                        </div>

                                        {/* Tech stack */}
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                                            {technologies.map((t) => (
                                                <span key={t} style={{ fontSize: "0.75rem", padding: "3px 10px", borderRadius: "6px", background: "var(--muted)", color: "var(--muted-foreground)", fontFamily: "monospace" }}>{t}</span>
                                            ))}
                                        </div>

                                        <Link href="/contact#request" className="btn-primary" style={{ background: `linear-gradient(135deg, ${color}, #12C8E8)`, boxShadow: `0 4px 16px ${color}40`, fontSize: "0.88rem", padding: "10px 16px", justifyContent: "center" }}>
                                            View Details <ExternalLink size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
