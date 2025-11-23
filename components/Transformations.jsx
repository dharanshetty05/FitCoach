"use client";

import { motion } from "framer-motion";

export default function Transformations() {
  const items = [
    {
      img: "/BA1.png", 
      caption: "Lost 7 kg in 8 weeks with structured training.",
    },
    {
      img: "/BA2.png",
      caption: "Built lean muscle and improved posture.",
    },
    {
      img: "/BA3.png",
      caption: "Achieved fat loss + stamina boost in 12 weeks.",
    },
  ];

  return (
    <section
      id="transformations"
      className="px-6 py-20 bg-neutral-900 text-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 leading-snug"
      >
        Client Transformations
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Image Box */}
            <div className="w-full group">
              <div className="overflow-hidden rounded-xl border border-white/10 shadow-md">
                <img
                  src={item.img}
                  alt="Before After"
                  className="w-full h-64 md:h-72 object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Caption */}
            <p className="mt-4 text-sm opacity-80 max-w-[260px] leading-relaxed">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
