"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
    return (
        <Link
            href="https://wa.me/254729596966"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
            title="Chat with us on WhatsApp"
        >
            <MessageCircle size={28} fill="white" />
        </Link>
    );
}
