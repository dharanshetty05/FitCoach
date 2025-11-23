"use client";

import { motion } from "framer-motion";

export default function Programs() {
  const programs = [
    {
      title: "Personal Training (Offline)",
      desc: "Training at your home, society gym or preferred location.",
      price: "₹X,000 – ₹X,000 / month",
    },
    {
      title: "12-Week Transformation Program",
      desc: "Includes diet plan, workouts, weekly check-ins.",
      price: "Starting at ₹X,000",
    },
    {
      title: "Online Coaching (Monthly)",
      desc: "Custom plans + weekly check-ins + WhatsApp support.",
      price: "₹X,000 / month",
    },
    {
      title: "Beginner’s Fitness Program",
      desc: "Simple routines + foundational form + basic diet.",
      price: "₹X,000",
    },
  ];

  return (
    <section id="programs" className="px-6 py-20 text-center">

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 leading-snug"
      >
        Programs & Packages
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="p-5 bg-neutral-900 border border-white/5 rounded-xl text-left"
          >
            <h3 className="text-lg md:text-xl font-semibold tracking-tight">
              {program.title}
            </h3>

            <p className="opacity-80 mt-2 text-sm md:text-base leading-relaxed">
              {program.desc}
            </p>

            <p className="mt-4 font-semibold text-green-400 text-sm md:text-base">
              {program.price}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
