"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] pt-[80px] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden vignette"
    >
      {/* Background with Ken Burns */}
      <div
        className="absolute inset-0 bg-cover bg-[position:60%_center] md:bg-[position:75%_20%] kenburns"
        style={{
          backgroundImage: "url('/trainer.png')",
        }}
      />

      {/* Elegant gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />

      {/* Floating particles layer */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-lg lg:max-w-xl text-white lg:pr-20"
      >
        {/* HEADLINE with subtle glow */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-3xl md:text-5xl font-bold leading-tight md:leading-[1.2] headline"
        >
          Transform Your Body With 
          <span className="block">1-on-1 Personal Training</span>
        </motion.h1>

        {/* SUBHEADLINE */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 opacity-90 text-base md:text-lg max-w-md leading-relaxed"
        >
          Home Workouts • Gym Coaching • Online Programs
          <br />
          Fat Loss | Muscle Gain | Strength Training
        </motion.p>

        {/* MINI LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-3 text-sm"
        >
          Flexible coaching designed around your schedule.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.55 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition text-center shadow-lg shadow-green-500/30"
          >
            WhatsApp Enquiry
          </a>

          <a
            href="#programs"
            className="px-8 py-3 border border-white/40 font-semibold rounded-lg hover:bg-white hover:text-black transition text-center backdrop-blur-sm"
          >
            View Programs
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
