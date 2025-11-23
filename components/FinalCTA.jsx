"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="px-6 py-24 text-center relative">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 to-neutral-900/90 -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold leading-snug max-w-2xl mx-auto"
      >
        Ready To Start Your Fitness Journey?
      </motion.h2>

      {/* Sub-text */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true }}
        className="opacity-80 mt-3 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
      >
        Get personalised 1:1 coaching designed around your lifestyle, goals and schedule.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="https://wa.me/91XXXXXXXXXX"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        viewport={{ once: true }}
        className="mt-8 inline-block px-10 py-4 rounded-lg font-semibold bg-green-500 text-black hover:bg-green-400 transition shadow-[0_0_25px_rgba(34,197,94,0.3)]"
      >
        Enquire on WhatsApp
      </motion.a>

      {/* Optional extra sub-line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        viewport={{ once: true }}
        className="mt-4 text-xs md:text-sm"
      >
        Quick replies • No commitments • Free initial consultation
      </motion.p>

    </section>
  );
}
