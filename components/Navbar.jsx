"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Transformations", href: "#transformations" },
    { name: "FAQ", href: "#faq" },
  ];

  // Track scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const positions = links.map((link) => {
        const el = document.querySelector(link.href);
        if (!el) return { href: link.href, top: Infinity };
        return { href: link.href, top: el.getBoundingClientRect().top };
      });

      const visible = positions.reduce((closest, current) =>
        Math.abs(current.top) < Math.abs(closest.top) ? current : closest
      );

      setActive(visible.href);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth Scroll
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={`backdrop-blur-lg bg-black/40 border-b border-white/10 transition-all ${
          scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.4)]" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
            className="text-xl font-bold tracking-tight text-white"
          >
            FitCoach
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10 relative desktop-nav">

            {/* Sliding underline */}
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 h-[3px] bg-green-400 rounded-full"
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              style={{
                left:
                  typeof window !== "undefined"
                    ? document
                        .querySelector(`[data-link='${active}']`)
                        ?.getBoundingClientRect().left -
                      document
                        .querySelector(".desktop-nav")
                        ?.getBoundingClientRect().left
                    : 0,
                width:
                  typeof window !== "undefined"
                    ? document
                        .querySelector(`[data-link='${active}']`)
                        ?.getBoundingClientRect().width
                    : 0,
              }}
            />

            {/* Nav Links */}
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-link={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`
                  relative text-sm font-medium 
                  transition-all duration-200
                  nav-hover-glow
                  ${active === link.href 
                    ? "text-green-400 translate-y-[-2px] active" 
                    : "text-white/80 hover:text-white hover:translate-y-[-2px]"
                  }
                `}

              >
                {link.name}
              </a>
            ))}

            {/* CTA */}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="px-4 py-2 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition flex items-center gap-2 ml-4"
            >
              <Phone size={16} />
              WhatsApp
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/10 px-6 py-4"
            >
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    data-link={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`text-base font-medium ${
                      active === link.href ? "text-green-400" : "text-white/80"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}

                {/* MOBILE CTA */}
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="mt-2 px-4 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}
