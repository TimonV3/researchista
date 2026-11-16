"use client";

import { motion } from "framer-motion";

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
  const textSubColor = theme === "dark" ? "#FAF7F2" : "#131A26";
  const glassesColor = theme === "dark" ? "#FAF7F2" : "#131A26";
  const blueColor = "#2DA9FF";
  const goldColor = "#F4C430";

  if (variant === "compact") {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 360, damping: 24 }}
        className={`inline-flex items-center select-none ${className}`}
      >
        <svg
          viewBox="0 0 340 76"
          className="h-10 sm:h-11 w-auto"
          role="img"
          aria-label="Researchista — With Love for Research(ers)"
        >
          {/* Top & bottom thin accent brackets */}
          <path
            d="M 52 16 L 52 4 L 288 4 L 288 16"
            fill="none"
            stroke={blueColor}
            strokeWidth="2.8"
          />
          <path
            d="M 52 56 L 52 68 L 288 68 L 288 56"
            fill="none"
            stroke={blueColor}
            strokeWidth="2.8"
          />

          {/* RESEARCHISTA wordmark */}
          <text
            x="170"
            y="44"
            textAnchor="middle"
            fill={blueColor}
            fontSize="31"
            fontWeight="800"
            letterSpacing="4.5"
            fontFamily="var(--font-jakarta), system-ui, sans-serif"
          >
            RESEARCHISTA
          </text>

          {/* Golden laurel wreath on the R */}
          <g transform="translate(15, 22)" fill={goldColor}>
            <path d="M9 17c-4-2-6-6-5-11 2 2 4 4 4 7-2-2-3-5-2-8 2 2 3 4 3 6" />
            <path d="M18 17c4-2 6-6 5-11-2 2-4 4-4 7 2-2 3-5 2-8-2 2-3 4-3 6" />
            <circle cx="13.5" cy="18.5" r="1.4" />
          </g>

          {/* Cat-eye glasses above the I */}
          <g
            transform="translate(226, 9)"
            fill="none"
            stroke={glassesColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 3 C4 1, 9 2, 11 5 C12 7, 9 9, 5 9 C2 9, 1 6, 1 3 Z" />
            <path d="M25 3 C22 1, 17 2, 15 5 C14 7, 17 9, 21 9 C24 9, 25 6, 25 3 Z" />
            <path d="M11 4.5 Q13 3 15 4.5" />
          </g>

          {/* Tagline */}
          <text
            x="170"
            y="60"
            textAnchor="middle"
            fill={textSubColor}
            fontSize="8.5"
            fontWeight="700"
            letterSpacing="2.8"
            fontFamily="var(--font-jakarta), system-ui, sans-serif"
          >
            WITH LOVE FOR RESEARCH(ERS)
          </text>
        </svg>
      </motion.div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 420 120"
        className="w-64 sm:w-72 h-auto"
        role="img"
        aria-label="Researchista — With Love for Research(ers)"
      >
        {/* Top bracket */}
        <path
          d="M 65 30 L 65 10 L 355 10 L 355 30"
          fill="none"
          stroke={blueColor}
          strokeWidth="3.5"
        />
        {/* Bottom bracket */}
        <path
          d="M 65 88 L 65 108 L 355 108 L 355 88"
          fill="none"
          stroke={blueColor}
          strokeWidth="3.5"
        />

        {/* RESEARCHISTA */}
        <text
          x="210"
          y="71"
          textAnchor="middle"
          fill={blueColor}
          fontSize="38"
          fontWeight="800"
          letterSpacing="6"
          fontFamily="var(--font-jakarta), system-ui, sans-serif"
        >
          RESEARCHISTA
        </text>

        {/* Golden laurel wreath on R */}
        <g transform="translate(15, 44) scale(1.2)" fill={goldColor}>
          <path d="M9 17c-4-2-6-6-5-11 2 2 4 4 4 7-2-2-3-5-2-8 2 2 3 4 3 6" />
          <path d="M18 17c4-2 6-6 5-11-2 2-4 4-4 7 2-2 3-5 2-8-2 2-3 4-3 6" />
          <circle cx="13.5" cy="18.5" r="1.4" />
        </g>

        {/* Glasses above I */}
        <g
          transform="translate(280, 26) scale(1.25)"
          fill="none"
          stroke={glassesColor}
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 3 C4 1, 9 2, 11 5 C12 7, 9 9, 5 9 C2 9, 1 6, 1 3 Z" />
          <path d="M25 3 C22 1, 17 2, 15 5 C14 7, 17 9, 21 9 C24 9, 25 6, 25 3 Z" />
          <path d="M11 4.5 Q13 3 15 4.5" />
        </g>

        {/* Tagline */}
        <text
          x="210"
          y="92"
          textAnchor="middle"
          fill={textSubColor}
          fontSize="10.5"
          fontWeight="700"
          letterSpacing="3.4"
          fontFamily="var(--font-jakarta), system-ui, sans-serif"
        >
          WITH LOVE FOR RESEARCH(ERS)
        </text>
      </svg>
    </div>
  );
}
