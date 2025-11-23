"use client";

import { motion } from "framer-motion";

export default function WhyChoose() {
  const points = [
    "Certified & Experienced Trainer",
    "1:1 Personalised Sessions",
    "Custom Diet & Workout Plans",
    "Home / Society Gym Training",
    "Weekly Progress Tracking",
    "Beginner-Friendly Approach",
  ];

  return (
    <section className="px-6 py-20 bg-neutral-900 text-center">

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 leading-snug"
      >
        Why Clients Choose My Coaching
      </motion.h2>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="p-5 bg-neutral-800 border border-white/10 rounded-lg text-sm md:text-base font-medium tracking-tight"
          >
            {point}
          </motion.div>
        ))}
      </div>

    </section>
  );
}
