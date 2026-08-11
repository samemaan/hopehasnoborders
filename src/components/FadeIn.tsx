"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  dir?: "ltr" | "rtl";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
  dir,
}: FadeInProps) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Plain markup on SSR + first client paint so Framer styles can't mismatch.
  if (!mounted) {
    return (
      <div className={className} dir={dir}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      dir={dir}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
