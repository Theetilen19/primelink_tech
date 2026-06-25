"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Globe, ShoppingCart, Code2, Smartphone, Network, Shield,
  Star, CheckCircle, Users, Award, Zap, TrendingUp, ChevronDown, Quote
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.13 } } };

/* ─── Counter hook ─── */
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

/* ─── Stat card ─── */
function StatCard({ value, suffix = "", label, icon: Icon }: { value: number; suffix?: string; label: string; icon: React.ComponentType<{ size: number; style?: React.CSSProperties }> }) {
  const { count, ref } = useCounter(value);
  return (
    <div
      ref={ref}
      style={{
        textAlign: "center", padding: "36px 24px",
        background: "rgba(255,255,255,0.07)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "20px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
        <div style={{
          width: "52px", height: "52px", borderRadius: "14px",
          background: "linear-gradient(135deg, rgba(30,136,255,0.25), rgba(18,200,232,0.25))",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Icon size={24} style={{ color: "#12C8E8" }} />
        </div>
      </div>
      <div style={{ fontSize: "2.8rem", fontWeight: 800, color: "white", lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", marginTop: "8px" }}>{label}</div>
    </div>
  );
}

/* ─── Service card ─── */
const services = [
  { icon: Globe, title: "Website Development", desc: "Portfolio, business, corporate websites & landing pages built to impress and convert.", color: "#1E88FF", href: "/services#web" },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Scalable online stores from starter to enterprise, powered by the latest technology.", color: "#12C8E8", href: "/services#ecommerce" },
  { icon: Code2, title: "Custom Software", desc: "School, hospital, ERP, CRM, insurance & SaaS platforms tailored to your business.", color: "#1E88FF", href: "/services#software" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Android, iOS & cross-platform apps that deliver stunning user experiences.", color: "#12C8E8", href: "/services#mobile" },
  { icon: Network, title: "Networking & ISP", desc: "MikroTik, hotspot, PPPoE, ISP infrastructure & network monitoring solutions.", color: "#1E88FF", href: "/services#networking" },
  { icon: Shield, title: "Cloud & Security", desc: "VPS deployment, cloud hosting, security audits & comprehensive server management.", color: "#12C8E8", href: "/services#cloud" },
];

/* ─── Testimonials ─── */
const testimonials = [
  { name: "James Mwangi", role: "CEO, TechVentures Kenya", text: "PrimeLink built our ISP billing platform in record time. The quality and support are absolutely outstanding!", rating: 5 },
  { name: "Grace Wanjiku", role: "Director, St. Mary's School", text: "Our school management system transformed how we operate. Students, teachers and parents love the new platform.", rating: 5 },
  { name: "Dr. Peter Kamau", role: "Administrator, Afya Hospital", text: "From patient records to billing, our hospital system runs seamlessly. PrimeLink delivered beyond expectations.", rating: 5 },
];

/* ─── FAQs ─── */
const faqs = [
  { q: "How long does a website project take?", a: "Timelines vary by complexity. A portfolio website takes 1–2 weeks, a business website 2–4 weeks, and custom software 4–16 weeks depending on requirements." },
  { q: "Do you provide maintenance after delivery?", a: "Yes! We offer ongoing maintenance, updates, and support packages to keep your software running smoothly." },
  { q: "What payment methods do you accept?", a: "We accept M-Pesa, bank transfers, and PayPal. Payment schedules are agreed upon before project commencement." },
  { q: "Can you work with clients outside Kenya?", a: "Absolutely. We serve clients across Africa and internationally, with remote collaboration tools keeping everything on track." },
  { q: "Do you provide hosting services?", a: "Yes, we offer VPS and cloud hosting solutions, and can manage your server infrastructure end-to-end." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          width: "100%", padding: "20px 0", background: "none", border: "none",
          cursor: "pointer", textAlign: "left", color: "var(--foreground)",
          fontSize: "1.02rem", fontWeight: 600,
        }}
      >
        {q}
        <ChevronDown size={20} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.3s", flexShrink: 0, color: "#1E88FF" }} />
      </button>
      {open && (
        <p style={{ paddingBottom: "20px", color: "var(--muted-foreground)", lineHeight: 1.7, fontSize: "0.95rem" }}>{a}</p>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Gradient background */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, #062B6F 0%, #0b3a95 35%, #1E88FF 75%, #12C8E8 100%)",
        }} />
        {/* Mesh blobs */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(18,200,232,0.18) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(30,136,255,0.2) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", top: "40%", left: "45%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />
        </div>

        <div className="container-xl" style={{ position: "relative", zIndex: 1, paddingTop: "120px", paddingBottom: "80px" }}>
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            style={{ maxWidth: "780px" }}
          >
            <motion.div variants={fadeUp}>
              <span className="badge" style={{ background: "rgba(18,200,232,0.15)", color: "#12C8E8", border: "1px solid rgba(18,200,232,0.3)", marginBottom: "24px" }}>
                🚀 Kenya&apos;s Premier Tech Agency
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "white",
              letterSpacing: "-0.03em",
              marginBottom: "24px",
            }}>
              Transforming Ideas Into{" "}
              <span style={{ color: "#12C8E8" }}>Digital Solutions</span>
            </motion.h1>

            <motion.p variants={fadeUp} style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: "40px", maxWidth: "580px" }}>
              PrimeLink Technologies delivers world-class web development, mobile apps, custom software, networking & cloud solutions that propel your business forward.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/contact#request" className="btn-primary" style={{ background: "white", color: "#062B6F", boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}>
                Request Project <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
                Get Free Consultation
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: "flex", gap: "32px", marginTop: "48px", flexWrap: "wrap" }}>
              {[
                { icon: CheckCircle, text: "50+ Projects Delivered" },
                { icon: CheckCircle, text: "24/7 Support" },
                { icon: CheckCircle, text: "Satisfaction Guaranteed" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.85)", fontSize: "0.92rem" }}>
                  <Icon size={16} style={{ color: "#12C8E8" }} />
                  {text}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ background: "linear-gradient(135deg, #062B6F 0%, #1E88FF 100%)", padding: "80px 0" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "24px" }}>
            <StatCard value={50} suffix="+" label="Projects Delivered" icon={Award} />
            <StatCard value={30} suffix="+" label="Happy Clients" icon={Users} />
            <StatCard value={5} suffix="+" label="Years Experience" icon={TrendingUp} />
            <StatCard value={99} suffix="%" label="Client Satisfaction" icon={Star} />
            <StatCard value={24} suffix="/7" label="Support Available" icon={Zap} />
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-py mesh-bg">
        <div className="container-xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={stagger}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "56px" }}
          >
            <motion.div variants={fadeUp}>
              <span className="badge badge-primary" style={{ marginBottom: "16px" }}>What We Do</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-heading" style={{ marginBottom: "16px" }}>
              Our <span className="gradient-text">Core Services</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subheading" style={{ margin: "0 auto" }}>
              From web presence to enterprise systems, we deliver technology solutions that make a real difference.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={stagger}
            viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}
          >
            {services.map(({ icon: Icon, title, desc, color, href }) => (
              <motion.div key={title} variants={fadeUp}>
                <Link href={href} style={{ textDecoration: "none" }}>
                  <div
                    className="card-hover"
                    style={{
                      padding: "32px", borderRadius: "20px",
                      background: "var(--card)",
                      border: "1.5px solid var(--border)",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{
                      width: "56px", height: "56px", borderRadius: "16px",
                      background: `${color}18`,
                      border: `1.5px solid ${color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "20px",
                    }}>
                      <Icon size={26} style={{ color }} />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: "1.12rem", marginBottom: "10px", color: "var(--foreground)" }}>{title}</h3>
                    <p style={{ color: "var(--muted-foreground)", fontSize: "0.92rem", lineHeight: 1.65 }}>{desc}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "20px", color, fontSize: "0.88rem", fontWeight: 600 }}>
                      Learn More <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/services" className="btn-primary">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="section-py" style={{ background: "var(--muted)" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <span className="badge badge-primary" style={{ marginBottom: "16px" }}>Why PrimeLink</span>
              <h2 className="section-heading" style={{ marginBottom: "20px" }}>
                We Build More Than <span className="gradient-text">Software</span>
              </h2>
              <p className="section-subheading" style={{ marginBottom: "36px" }}>
                We build lasting partnerships. Our team combines deep technical expertise with strategic thinking to deliver solutions that grow with your business.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Experienced team of developers & engineers",
                  "Agile development methodology",
                  "On-time delivery guaranteed",
                  "Scalable & maintainable architecture",
                  "Post-launch support & training",
                  "Competitive & transparent pricing",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <CheckCircle size={18} style={{ color: "#1E88FF", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.95rem", color: "var(--foreground)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
            >
              {[
                { label: "Web Projects", value: "25+", color: "#1E88FF" },
                { label: "Mobile Apps", value: "10+", color: "#12C8E8" },
                { label: "Enterprise Systems", value: "8+", color: "#062B6F" },
                { label: "Network Setup", value: "12+", color: "#1E88FF" },
              ].map(({ label, value, color }) => (
                <div key={label} style={{
                  padding: "28px", borderRadius: "16px",
                  background: "var(--card)", border: "1.5px solid var(--border)",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 800, color, marginBottom: "8px" }}>{value}</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-py">
        <div className="container-xl">
          <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "56px" }}>
            <motion.div variants={fadeUp}><span className="badge badge-primary" style={{ marginBottom: "16px" }}>Testimonials</span></motion.div>
            <motion.h2 variants={fadeUp} className="section-heading" style={{ marginBottom: "16px" }}>
              What Our <span className="gradient-text">Clients Say</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "24px" }}
          >
            {testimonials.map(({ name, role, text, rating }) => (
              <motion.div key={name} variants={fadeUp}>
                <div style={{
                  padding: "32px", borderRadius: "20px",
                  background: "var(--card)", border: "1.5px solid var(--border)",
                  height: "100%",
                }}>
                  <Quote size={32} style={{ color: "#1E88FF", opacity: 0.4, marginBottom: "16px" }} />
                  <p style={{ color: "var(--foreground)", lineHeight: 1.75, marginBottom: "20px", fontSize: "0.95rem" }}>&quot;{text}&quot;</p>
                  <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} size={14} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                    ))}
                  </div>
                  <div style={{ fontWeight: 700, color: "var(--foreground)", fontSize: "0.95rem" }}>{name}</div>
                  <div style={{ color: "var(--muted-foreground)", fontSize: "0.85rem" }}>{role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-py" style={{ background: "var(--muted)" }}>
        <div className="container-xl">
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "48px" }}>
              <motion.div variants={fadeUp}><span className="badge badge-primary" style={{ marginBottom: "16px" }}>FAQ</span></motion.div>
              <motion.h2 variants={fadeUp} className="section-heading" style={{ marginBottom: "16px" }}>
                Frequently Asked <span className="gradient-text">Questions</span>
              </motion.h2>
            </motion.div>
            {faqs.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section style={{ background: "linear-gradient(135deg, #062B6F 0%, #1E88FF 60%, #12C8E8 100%)", padding: "96px 0", textAlign: "center" }}>
        <div className="container-xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "white", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Ready to Build Something <br />Extraordinary?
            </h2>
            <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.8)", marginBottom: "40px" }}>
              Let&apos;s turn your vision into a world-class digital product.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact#request" className="btn-primary" style={{ background: "white", color: "#062B6F", boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}>
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link href="https://wa.me/254729596966" target="_blank" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
                Chat on WhatsApp
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
