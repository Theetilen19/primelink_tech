"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle, Loader2, Upload, X } from "lucide-react";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const serviceOptions = [
    "Portfolio Website",
    "Business Website",
    "Corporate Website",
    "Landing Page",
    "E-Commerce Store",
    "Mobile Application",
    "School Management System",
    "Hospital System",
    "ERP System",
    "Networking Project",
    "Cloud Services",
    "Other",
];

const budgetRanges = [
    "Under $500",
    "$500 – $1,000",
    "$1,000 – $2,500",
    "$2,500 – $5,000",
    "$5,000 – $10,000",
    "$10,000+",
    "To be discussed",
];

interface FormData {
    fullName: string;
    companyName: string;
    email: string;
    phone: string;
    whatsapp: string;
    service: string;
    budget: string;
    deadline: string;
    description: string;
}

const initialForm: FormData = {
    fullName: "", companyName: "", email: "", phone: "",
    whatsapp: "", service: "", budget: "", deadline: "", description: "",
};

export default function ContactPage() {
    const [form, setForm] = useState<FormData>(initialForm);
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const fileRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) setFile(e.target.files[0]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const body = new FormData();
            Object.entries(form).forEach(([k, v]) => body.append(k, v));
            if (file) body.append("file", file);

            const res = await fetch("/api/contact", { method: "POST", body });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Something went wrong");

            setStatus("success");

            // Build WhatsApp message
            const wa = encodeURIComponent(
                `*NEW PROJECT REQUEST — PrimeLink Technologies*\n\n` +
                `👤 *Name:* ${form.fullName}\n` +
                `📞 *Phone:* ${form.phone}\n` +
                `🏢 *Company:* ${form.companyName || "N/A"}\n` +
                `📧 *Email:* ${form.email}\n\n` +
                `🛠️ *Service:* ${form.service}\n` +
                `💰 *Budget:* ${form.budget}\n` +
                `📅 *Deadline:* ${form.deadline || "Flexible"}\n\n` +
                `📝 *Description:*\n${form.description}`
            );

            setTimeout(() => {
                window.open(`https://wa.me/254729596966?text=${wa}`, "_blank");
                setForm(initialForm);
                setFile(null);
                setStatus("idle");
            }, 2000);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "An error occurred";
            setStatus("error");
            setErrorMsg(message);
        }
    };

    const Field = ({
        label, name, type = "text", required = false, placeholder = "",
    }: {
        label: string; name: keyof FormData; type?: string; required?: boolean; placeholder?: string;
    }) => (
        <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "6px", color: "var(--foreground)" }}>
                {label} {required && <span style={{ color: "#ef4444" }}>*</span>}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                required={required}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="input-field"
            />
        </div>
    );

    return (
        <>
            {/* Hero */}
            <section style={{
                background: "linear-gradient(135deg, #062B6F 0%, #1E88FF 70%, #12C8E8 100%)",
                padding: "140px 0 96px", textAlign: "center",
            }}>
                <div className="container-xl">
                    <motion.div initial="hidden" animate="show" variants={stagger}>
                        <motion.div variants={fadeUp}><span className="badge" style={{ background: "rgba(18,200,232,0.15)", color: "#12C8E8", border: "1px solid rgba(18,200,232,0.3)", marginBottom: "20px" }}>Get In Touch</span></motion.div>
                        <motion.h1 variants={fadeUp} style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "white", marginBottom: "16px", letterSpacing: "-0.025em" }}>
                            Let&apos;s Build Something <span style={{ color: "#12C8E8" }}>Amazing</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", maxWidth: "520px", margin: "0 auto" }}>
                            Submit your project details below and we&apos;ll get back to you within 24 hours.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Contact info cards */}
            <section style={{ padding: "64px 0 0" }}>
                <div className="container-xl">
                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "64px" }}>
                        {[
                            { icon: Phone, label: "Call Us", values: ["0729 596 966", "0113 697 897"], href: "tel:0729596966", color: "#1E88FF" },
                            { icon: Mail, label: "Email Us", values: ["info@primelink.co.ke"], href: "mailto:info@primelink.co.ke", color: "#12C8E8" },
                            { icon: MessageCircle, label: "WhatsApp", values: ["0729 596 966"], href: "https://wa.me/254729596966", color: "#25D366" },
                            { icon: MapPin, label: "Location", values: ["Nairobi, Kenya"], href: "#", color: "#1E88FF" },
                        ].map(({ icon: Icon, label, values, href, color }) => (
                            <motion.div key={label} variants={fadeUp}>
                                <a
                                    href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="card-hover"
                                    style={{
                                        display: "block", padding: "28px 24px", borderRadius: "18px",
                                        background: "var(--card)", border: "1.5px solid var(--border)",
                                        textDecoration: "none", textAlign: "center",
                                    }}
                                >
                                    <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: `${color}14`, border: `1.5px solid ${color}25`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                                        <Icon size={22} style={{ color }} />
                                    </div>
                                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--foreground)", marginBottom: "4px" }}>{label}</div>
                                    {values.map((v) => (
                                        <div key={v} style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>{v}</div>
                                    ))}
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Project Request Form */}
            <section id="request" className="section-py" style={{ background: "var(--muted)", paddingTop: "64px" }}>
                <div className="container-xl">
                    <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "48px" }}>
                        <motion.div variants={fadeUp}><span className="badge badge-primary" style={{ marginBottom: "12px" }}>Project Request</span></motion.div>
                        <motion.h2 variants={fadeUp} className="section-heading">Submit Your <span className="gradient-text">Project Request</span></motion.h2>
                        <motion.p variants={fadeUp} className="section-subheading" style={{ margin: "12px auto 0" }}>
                            Fill in the form below and we&apos;ll follow up with a customized proposal and timeline.
                        </motion.p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                        <div style={{ maxWidth: "820px", margin: "0 auto", background: "var(--card)", borderRadius: "24px", padding: "clamp(24px, 5vw, 48px)", border: "1.5px solid var(--border)", boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}>
                            {status === "success" && (
                                <div style={{ textAlign: "center", padding: "48px 0" }}>
                                    <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(16,185,129,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                                        <CheckCircle size={36} style={{ color: "#10b981" }} />
                                    </div>
                                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "12px", color: "var(--foreground)" }}>Request Sent Successfully!</h3>
                                    <p style={{ color: "var(--muted-foreground)" }}>You&apos;re being redirected to WhatsApp to complete your request...</p>
                                </div>
                            )}

                            {status !== "success" && (
                                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "24px" }}>
                                    {/* Personal info */}
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                                        <Field label="Full Name" name="fullName" required placeholder="John Doe" />
                                        <Field label="Company Name" name="companyName" placeholder="Acme Corp (optional)" />
                                    </div>

                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                                        <Field label="Email Address" name="email" type="email" required placeholder="john@company.com" />
                                        <Field label="Phone Number" name="phone" type="tel" required placeholder="0712 345 678" />
                                    </div>

                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                                        <Field label="WhatsApp Number" name="whatsapp" type="tel" placeholder="0712 345 678" />
                                        <div>
                                            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "6px", color: "var(--foreground)" }}>
                                                Project Deadline
                                            </label>
                                            <input type="date" name="deadline" value={form.deadline} onChange={handleChange} className="input-field" />
                                        </div>
                                    </div>

                                    {/* Service & Budget */}
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                                        <div>
                                            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "6px", color: "var(--foreground)" }}>
                                                Service Required <span style={{ color: "#ef4444" }}>*</span>
                                            </label>
                                            <select id="service" name="service" required value={form.service} onChange={handleChange} className="input-field" style={{ appearance: "none" }}>
                                                <option value="">Select a service...</option>
                                                {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "6px", color: "var(--foreground)" }}>
                                                Budget Range <span style={{ color: "#ef4444" }}>*</span>
                                            </label>
                                            <select id="budget" name="budget" required value={form.budget} onChange={handleChange} className="input-field" style={{ appearance: "none" }}>
                                                <option value="">Select budget range...</option>
                                                {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "6px", color: "var(--foreground)" }}>
                                            Project Description <span style={{ color: "#ef4444" }}>*</span>
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            required
                                            rows={5}
                                            value={form.description}
                                            onChange={handleChange}
                                            placeholder="Describe your project in detail: goals, features, target audience, any specific requirements..."
                                            className="input-field"
                                            style={{ resize: "vertical" }}
                                        />
                                    </div>

                                    {/* File attachment */}
                                    <div>
                                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "6px", color: "var(--foreground)" }}>
                                            File Attachment <span style={{ color: "var(--muted-foreground)", fontWeight: 400 }}>(optional — designs, docs, briefs)</span>
                                        </label>
                                        <input ref={fileRef} type="file" onChange={handleFile} style={{ display: "none" }} accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip" />
                                        {file ? (
                                            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", border: "1.5px solid #1E88FF", borderRadius: "10px", background: "rgba(30,136,255,0.06)" }}>
                                                <Upload size={16} style={{ color: "#1E88FF" }} />
                                                <span style={{ fontSize: "0.88rem", color: "var(--foreground)", flex: 1 }}>{file.name}</span>
                                                <button type="button" onClick={() => setFile(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted-foreground)" }}>
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => fileRef.current?.click()}
                                                style={{
                                                    width: "100%", padding: "16px", border: "2px dashed var(--border)", borderRadius: "10px",
                                                    background: "none", cursor: "pointer", color: "var(--muted-foreground)",
                                                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                                                    fontSize: "0.9rem", transition: "all 0.2s",
                                                }}
                                                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.borderColor = "#1E88FF")}
                                                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)")}
                                            >
                                                <Upload size={18} /> Click to attach file
                                            </button>
                                        )}
                                    </div>

                                    {status === "error" && (
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", borderRadius: "10px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#ef4444", fontSize: "0.88rem" }}>
                                            <AlertCircle size={16} /> {errorMsg}
                                        </div>
                                    )}

                                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="btn-primary"
                                            style={{ flex: 1, minWidth: "200px", justifyContent: "center", opacity: status === "loading" ? 0.7 : 1 }}
                                        >
                                            {status === "loading" ? (
                                                <><Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} /> Sending...</>
                                            ) : (
                                                <><Send size={18} /> Submit Request</>
                                            )}
                                        </button>
                                        <Link
                                            href="https://wa.me/254729596966"
                                            target="_blank"
                                            className="btn-secondary"
                                            style={{ flex: 1, minWidth: "200px", justifyContent: "center" }}
                                        >
                                            <MessageCircle size={18} /> WhatsApp Instead
                                        </Link>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </>
    );
}
