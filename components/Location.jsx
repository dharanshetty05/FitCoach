"use client";

import { motion } from "framer-motion";
import { MapPin, Home, Globe } from "lucide-react";

export default function Location() {
  const items = [
    {
      icon: MapPin,
      title: "Based In",
      text: "Koramangala, Bangalore",
    },
    {
      icon: Home,
      title: "Training Venues",
      text: "Home gyms • Apartment gyms • Society gyms • Parks",
    },
    {
      icon: Globe,
      title: "Online Coaching",
      text: "Available Pan-India",
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
        className="text-3xl md:text-4xl font-bold mb-14 leading-snug"
      >
        Location & Availability
      </motion.h2>

      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="p-8 bg-neutral-800 border border-white/5 rounded-xl text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]"
            >
              {/* Icon */}
              <Icon className="w-8 h-8 mx-auto text-green-400 mb-4" />

              {/* Title */}
              <h3 className="font-semibold text-lg tracking-tight mb-2">
                {item.title}
              </h3>

              {/* Text */}
              <p className="opacity-80 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          );
        })}

      </div>

    </section>
  );
}
