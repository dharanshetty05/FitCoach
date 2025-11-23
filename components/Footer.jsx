"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Transformations", href: "#transformations" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="px-6 py-16 bg-neutral-950 border-t border-white/10 text-white">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold tracking-tight">FitCoach</h2>
          <p className="opacity-70 text-sm mt-2 leading-relaxed">
            Personal training designed for real results — at home, society gyms or online.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://instagram.com/"
              className="p-2 bg-neutral-900 rounded-lg border border-white/10 hover:bg-neutral-800 transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="mailto:example@mail.com"
              className="p-2 bg-neutral-900 rounded-lg border border-white/10 hover:bg-neutral-800 transition"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="p-2 bg-neutral-900 rounded-lg border border-white/10 hover:bg-neutral-800 transition"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-left md:text-center">
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="opacity-80 hover:opacity-100 transition text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-left md:text-right">
          <h3 className="font-semibold text-lg mb-4">Contact</h3>

          <p className="opacity-80 text-sm leading-relaxed">
            Koramangala, Bangalore  
            <br />
            Available Pan-India (Online)
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="mt-3 inline-block text-green-400 font-medium hover:text-green-300 text-sm"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>

      {/* Bottom credit */}
      <div className="text-center mt-12 opacity-60 text-xs">
        © {new Date().getFullYear()} FitCoach. All rights reserved.
        <br />
        Built by <span className="text-green-400">Dharan Shetty</span>.
      </div>
    </footer>
  );
}
