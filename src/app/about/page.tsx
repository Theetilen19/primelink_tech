"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Globe, Lock, Server, Smartphone, ArrowRight, Users, Award, CheckCircle } from "lucide-react";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const pillars = [
    { icon: Globe, title: "Software Development", desc: "Custom web apps, portals, school systems, hospital platforms, and enterprise ERP/CRM solutions built to scale.", color: "#1E88FF" },
    { icon: Server, title: "Networking & ISP", desc: "End-to-end ISP infrastructure: hotspot systems, PPPoE, billing platforms, and MikroTik configurations.", color: "#12C8E8" },
    { icon: Lock, title: "Cloud & Cybersecurity", desc: "VPS deployment, cloud hosting, server hardening, security audits, and managed infrastructure services.", color: "#062B6F" },
    { icon: Smartphone, title: "Mobile Applications", desc: "Native and cross-platform mobile apps that deliver seamless user experiences on Android and iOS.", color: "#1E88FF" },
    { icon: Lightbulb, title: "Digital Transformation", desc: "Strategic consulting and implementation to help businesses transition to modern, efficient digital operations.", color: "#12C8E8" },
    { icon: Target, title: "IT Consulting", desc: "Expert guidance on technology roadmaps, system architecture, vendor selection, and digital strategy.", color: "#062B6F" },
];

const team = [
    { name: "Alex Kimani", role: "CEO & Lead Developer", initials: "AK", color: "#1E88FF" },
    { name: "Faith Wambui", role: "UI/UX Designer", initials: "FW", color: "#12C8E8" },
    { name: "Brian Otieno", role: "Backend Engineer", initials: "BO", color: "#062B6F" },
    { name: "Diana Njeri", role: "Project Manager", initials: "DN", color: "#1E88FF" },
];

const values = [
    { title: "Innovation First", desc: "We continuously explore and adopt cutting-edge technologies to deliver future-proof solutions." },
    { title: "Client-Centered", desc: "Your success is our success. We listen deeply and tailor every solution to your specific needs." },
    { title: "Quality & Reliability", desc: "We uphold the highest standards of code quality, security, and system reliability." },
    { title: "Transparency", desc: "Open communication, honest timelines, and clear pricing — no surprises, ever." },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section style={{
                background: "linear-gradient(135deg, #062B6F 0%, #1E88FF 70%, #12C8E8 100%)",
                padding: "140px 0 96px", textAlign: "center",
            }}>
                <div className="container-xl">
                    <motion.div initial="hidden" animate="show" variants={stagger}>
                        <motion.div variants={fadeUp}><span className="badge" style={{ background: "rgba(18,200,232,0.15)", color: "#12C8E8", border: "1px solid rgba(18,200,232,0.3)", marginBottom: "20px" }}>About Us</span></motion.div>
                        <motion.h1 variants={fadeUp} style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "white", marginBottom: "20px", letterSpacing: "-0.025em" }}>
                            Connecting Innovation, <br /><span style={{ color: "#12C8E8" }}>Empowering Business</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
                            PrimeLink Technologies is a Nairobi-based digital agency dedicated to transforming businesses through innovative technology solutions.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-py">
                <div className="container-xl">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                            <span className="badge badge-primary" style={{ marginBottom: "16px" }}>Our Story</span>
                            <h2 className="section-heading" style={{ marginBottom: "20px" }}>
                                Built to <span className="gradient-text">Empower</span>
                            </h2>
                            <p style={{ color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "16px", fontSize: "0.97rem" }}>
                                PrimeLink Technologies was founded with a clear mission: to make world-class technology accessible to businesses of all sizes across Africa. We believe every organization — from a small school in Nairobi to a large enterprise in Mombasa — deserves premium digital tools.
                            </p>
                            <p style={{ color: "var(--muted-foreground)", lineHeight: 1.8, marginBottom: "32px", fontSize: "0.97rem" }}>
                                Our team of passionate developers, designers, and engineers work tirelessly to deliver solutions that don&apos;t just look great — they perform, scale, and evolve with your business.
                            </p>
                            <Link href="/contact" className="btn-primary">
                                Work With Us <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                                {[
                                    { icon: Target, label: "Our Mission", text: "To deliver innovative digital solutions that connect people, empower businesses, and drive sustainable growth.", color: "#1E88FF" },
                                    { icon: Lightbulb, label: "Our Vision", text: "To be the most trusted technology partner for businesses across Africa and beyond.", color: "#12C8E8" },
                                    { icon: Award, label: "Excellence", text: "Recognized for quality, innovation, and measurable impact in every project we undertake.", color: "#1E88FF" },
                                    { icon: Users, label: "Our Team", text: "A diverse, skilled team of developers, designers, and consultants committed to your success.", color: "#12C8E8" },
                                ].map(({ icon: Icon, label, text, color }) => (
                                    <div key={label} style={{ padding: "24px", borderRadius: "16px", background: "var(--muted)", border: "1.5px solid var(--border)" }}>
                                        <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: `${color}18`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                                            <Icon size={20} style={{ color }} />
                                        </div>
                                        <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "6px", color: "var(--foreground)" }}>{label}</div>
                                        <p style={{ fontSize: "0.82rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    <style>{`@media (max-width: 768px) { section .about-grid { grid-template-columns: 1fr !important; } }`}</style>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="section-py" style={{ background: "var(--muted)" }}>
                <div className="container-xl">
                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "56px" }}>
                        <motion.div variants={fadeUp}><span className="badge badge-primary" style={{ marginBottom: "16px" }}>What We Do</span></motion.div>
                        <motion.h2 variants={fadeUp} className="section-heading">Our Areas of <span className="gradient-text">Expertise</span></motion.h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                        {pillars.map(({ icon: Icon, title, desc, color }) => (
                            <motion.div key={title} variants={fadeUp}>
                                <div className="card-hover" style={{ padding: "28px", borderRadius: "18px", background: "var(--card)", border: "1.5px solid var(--border)" }}>
                                    <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: `${color}14`, border: `1.5px solid ${color}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                                        <Icon size={24} style={{ color }} />
                                    </div>
                                    <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "8px", color: "var(--foreground)" }}>{title}</h3>
                                    <p style={{ color: "var(--muted-foreground)", fontSize: "0.88rem", lineHeight: 1.65 }}>{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="section-py">
                <div className="container-xl">
                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "48px" }}>
                        <motion.div variants={fadeUp}><span className="badge badge-primary" style={{ marginBottom: "16px" }}>Core Values</span></motion.div>
                        <motion.h2 variants={fadeUp} className="section-heading">What <span className="gradient-text">Drives Us</span></motion.h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
                        {values.map(({ title, desc }, i) => (
                            <motion.div key={title} variants={fadeUp}>
                                <div style={{ padding: "32px", borderRadius: "18px", background: "var(--card)", border: "1.5px solid var(--border)", textAlign: "center" }}>
                                    <div style={{ fontSize: "2rem", marginBottom: "12px" }}>
                                        {["💡", "🤝", "⭐", "🔍"][i]}
                                    </div>
                                    <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "10px", color: "var(--foreground)" }}>{title}</h3>
                                    <p style={{ color: "var(--muted-foreground)", fontSize: "0.87rem", lineHeight: 1.65 }}>{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team */}
            <section className="section-py" style={{ background: "var(--muted)" }}>
                <div className="container-xl">
                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "48px" }}>
                        <motion.div variants={fadeUp}><span className="badge badge-primary" style={{ marginBottom: "16px" }}>The Team</span></motion.div>
                        <motion.h2 variants={fadeUp} className="section-heading">Meet the <span className="gradient-text">Experts</span></motion.h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", maxWidth: "900px", margin: "0 auto" }}>
                        {team.map(({ name, role, initials, color }) => (
                            <motion.div key={name} variants={fadeUp}>
                                <div className="card-hover" style={{ padding: "32px 24px", borderRadius: "18px", background: "var(--card)", border: "1.5px solid var(--border)", textAlign: "center" }}>
                                    <div style={{
                                        width: "80px", height: "80px", borderRadius: "50%",
                                        background: `linear-gradient(135deg, ${color}, #12C8E8)`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        margin: "0 auto 16px",
                                        fontSize: "1.6rem", fontWeight: 800, color: "white",
                                        boxShadow: `0 8px 24px ${color}40`,
                                    }}>
                                        {initials}
                                    </div>
                                    <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--foreground)", marginBottom: "4px" }}>{name}</h3>
                                    <p style={{ color: "var(--muted-foreground)", fontSize: "0.85rem" }}>{role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why choose */}
            <section className="section-py">
                <div className="container-xl">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                            <span className="badge badge-primary" style={{ marginBottom: "16px" }}>Why PrimeLink</span>
                            <h2 className="section-heading" style={{ marginBottom: "20px" }}>Your <span className="gradient-text">Trusted</span> Tech Partner</h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                {[
                                    "5+ years of combined industry experience",
                                    "End-to-end project management",
                                    "Agile and transparent development process",
                                    "Post-launch support and training",
                                    "Competitive and fair pricing",
                                    "Serving clients across Kenya and Africa",
                                ].map((item) => (
                                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                        <CheckCircle size={16} style={{ color: "#1E88FF", flexShrink: 0 }} />
                                        <span style={{ fontSize: "0.95rem", color: "var(--foreground)" }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact" className="btn-primary" style={{ marginTop: "32px" }}>
                                Start a Conversation <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                            <div style={{ padding: "48px", borderRadius: "24px", background: "linear-gradient(135deg, #062B6F 0%, #1E88FF 60%, #12C8E8 100%)", textAlign: "center" }}>
                                <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🚀</div>
                                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "white", marginBottom: "12px" }}>Ready to Launch?</h3>
                                <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "28px", fontSize: "0.95rem" }}>Join 30+ businesses that trust PrimeLink to power their digital presence.</p>
                                <Link href="/contact#request" className="btn-primary" style={{ background: "white", color: "#062B6F", boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}>
                                    Request Your Project
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
