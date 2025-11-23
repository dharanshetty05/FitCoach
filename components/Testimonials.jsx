"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rohan K.",
      text: "Training at home became convenient and effective. The sessions are personalised and easy to follow.",
    },
    {
      name: "Shreya P.",
      text: "Lost 6 kg in 2 months with clear guidance and consistent check-ins.",
    },
    {
      name: "Aditya S.",
      text: "Form correction and strength coaching helped me train confidently without injuries.",
    },
  ];

  return (
    <section className="px-6 py-20 text-center">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 leading-snug"
      >
        What Clients Say
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="p-5 bg-neutral-900 border border-white/5 rounded-xl text-left"
          >
            {/* Quote */}
            <p className="text-sm md:text-base opacity-80 italic leading-relaxed">
              “{t.text}”
            </p>

            {/* Name */}
            <p className="mt-4 font-semibold text-sm md:text-base tracking-tight">
              {t.name}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
