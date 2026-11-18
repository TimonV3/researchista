"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ResearchistaLogoProps {
  variant?: "compact" | "full";
  theme?: "light" | "dark";
  className?: string;
}

export function ResearchistaLogo({
  variant = "compact",
  theme = "light",
  className = "",
}: ResearchistaLogoProps) {
  const src = theme === "dark" ? "/logo-full-dark.png" : "/logo-full.png";

  if (variant === "compact") {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 360, damping: 24 }}
        className={`inline-flex items-center select-none ${className}`}
      >
        <Image
          src={src}
          alt="Researchista — Connecting the ivory tower with the public since 2016"
          width={621}
          height={99}
          priority
          unoptimized
          className="h-9 sm:h-11 w-auto object-contain"
        />
      </motion.div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src={src}
        alt="Researchista — Connecting the ivory tower with the public since 2016"
        width={621}
        height={99}
        unoptimized
        className="w-60 sm:w-72 h-auto object-contain"
      />
    </div>
  );
}
