"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      title: "WhatsApp Consultation",
      desc: "Share your goals, lifestyle, and schedule.",
    },
    {
      title: "Custom Plan Creation",
      desc: "Workout + diet tailored for your needs.",
    },
    {
      title: "Personalised Training",
      desc: "1:1 sessions focused on form and steady progression.",
    },
    {
      title: "Track Progress & Improve",
      desc: "Weekly check-ins to adjust and optimise your plan.",
    },
  ];

  return (
    <section className="px-6 py-20 bg-neutral-900 text-center">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 leading-snug"
      >
        How It Works
      </motion.h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-xl bg-neutral-800 border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.25)]"
          >
            {/* Step Number Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-700 border border-white/10 text-white font-semibold text-sm">
              {index + 1}
            </div>

            {/* Content */}
            <h3 className="mt-6 font-semibold text-base md:text-lg tracking-tight">
              {step.title}
            </h3>
            <p className="opacity-80 mt-2 text-sm leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
