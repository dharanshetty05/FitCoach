"use client";

import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    ["Where do you train clients?", "At their home, society gym, or preferred location."],
    ["Do you offer online coaching?", "Yes — online programs are available Pan-India."],
    ["Will I get a diet plan?", "Yes, every program includes a customised diet plan."],
    ["Do I need equipment?", "Not necessarily. Home-friendly routines are available."],
    ["How do weekly check-ins work?", "Progress is shared via WhatsApp with plan adjustments."],
    ["Is the training beginner-friendly?", "Yes, the routines are designed for all fitness levels."],
  ];

  return (
    <section id="faq" className="px-6 py-20">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-bold mb-14 leading-snug"
      >
        Frequently Asked Questions
      </motion.h2>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {faqs.map(([question, answer], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="p-6 bg-neutral-900 border border-white/5 rounded-xl hover:bg-neutral-800/80 transition-colors"
          >
            <h3 className="font-semibold text-base md:text-lg tracking-tight">
              {question}
            </h3>
            <p className="opacity-80 mt-2 text-sm md:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
