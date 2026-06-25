"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: "all 0.3s ease",
                background: scrolled
                    ? theme === "dark"
                        ? "rgba(7, 13, 26, 0.95)"
                        : "rgba(255, 255, 255, 0.95)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
                boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.08)" : "none",
                borderBottom: scrolled ? "1px solid var(--border)" : "none",
            }}
        >
            <div className="container-xl">
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "72px",
                    }}
                >
                    {/* Logo */}
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <Image
                            src="/images/logo.png"
                            alt="PrimeLink Technologies"
                            width={220}
                            height={120}
                            style={{ height: "120px", width: "auto", objectFit: "contain", marginTop: "-35px", marginBottom: "-35px" }}
                            priority
                        />
                    </Link>

                    {/* Desktop nav */}
                    <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn("nav-link", pathname === link.href && "active")}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right actions */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            style={{
                                background: "var(--muted)",
                                border: "1.5px solid var(--border)",
                                borderRadius: "10px",
                                padding: "8px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                color: "var(--foreground)",
                                transition: "all 0.2s",
                            }}
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <Link href="/contact#request" className="btn-primary" style={{ padding: "9px 20px", fontSize: "0.88rem" }}>
                            Request Project
                        </Link>

                        {/* Mobile menu btn */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            className="mobile-menu-btn"
                            style={{
                                background: "var(--muted)",
                                border: "1.5px solid var(--border)",
                                borderRadius: "10px",
                                padding: "8px",
                                cursor: "pointer",
                                display: "none",
                                alignItems: "center",
                                color: "var(--foreground)",
                            }}
                        >
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div
                        style={{
                            padding: "16px 0 24px",
                            borderTop: "1px solid var(--border)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    padding: "12px 8px",
                                    borderRadius: "8px",
                                    fontWeight: 500,
                                    textDecoration: "none",
                                    color: pathname === link.href ? "#1E88FF" : "var(--foreground)",
                                    background: pathname === link.href ? "rgba(30,136,255,0.08)" : "transparent",
                                    transition: "all 0.2s",
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </nav>
    );
}
