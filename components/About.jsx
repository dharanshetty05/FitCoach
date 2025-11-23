"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-3xl mx-auto text-center">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6 leading-snug"
      >
        Hi, I’m Arjun — Your Personal Fitness Coach
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-base md:text-lg opacity-90 leading-relaxed max-w-[650px] mx-auto"
      >
        I’m a certified personal trainer with 5+ years of experience helping clients transform
        their fitness through simple, structured and goal-based training. I specialise in home
        & society gym sessions, form correction, injury-safe workouts, and beginner-friendly
        routines for busy professionals.
      </motion.p>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        {[
          "Home / Society Gym Training",
          "Custom Diet & Workout Plans",
          "Beginner-Friendly Coaching",
          "Weekly Progress Tracking",
        ].map((item, i) => (
          <div
            key={i}
            className="p-4 bg-neutral-900 border border-white/10 rounded-lg text-sm md:text-base font-medium tracking-tight"
          >
            {item}
          </div>
        ))}
      </motion.div>

    </section>
  );
}
