"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface ResearchPoweredSealProps {
  certificateId?: string;
  projectLabel?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export function ResearchPoweredSeal({
  certificateId = "#001",
  projectLabel = "FNR • MAASTRICHT PHD",
  size = "md",
  onClick,
  className = "",
}: ResearchPoweredSealProps) {
  const dimensions =
    size === "sm"
      ? "w-24 h-24"
      : size === "lg"
      ? "w-40 h-40"
      : "w-32 h-32";

  const Wrapper = onClick ? motion.button : motion.div;

  return (
    <Wrapper
      type={onClick ? "button" : undefined}
      onClick={onClick}
      whileHover={{ scale: 1.06, rotate: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 360, damping: 22 }}
      aria-label={`Research-Powered Seal ${certificateId}`}
      className={`relative inline-flex items-center justify-center rounded-full select-none ${
        onClick ? "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-coral" : ""
      } ${dimensions} ${className}`}
    >
      {/* Rotating outer ring */}
      <motion.svg
        viewBox="0 0 160 160"
        className="w-full h-full drop-shadow-md"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path
            id={`seal-circle-${size}-${certificateId}`}
            d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
          />
        </defs>
        <circle
          cx="80"
          cy="80"
          r="76"
          fill="#131A26"
          stroke="#D49420"
          strokeWidth="3"
        />
        <circle
          cx="80"
          cy="80"
          r="69"
          fill="none"
          stroke="#D49420"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <text
          fill="#FAF7F2"
          fontSize="10.5"
          fontWeight="700"
          letterSpacing="2.3"
          className="font-mono uppercase"
        >
          <textPath
            href={`#seal-circle-${size}-${certificateId}`}
            startOffset="0%"
          >
            RESEARCH-POWERED • VERIFIED ORIGIN •
          </textPath>
        </text>
      </motion.svg>

      {/* Center static badge */}
      <div className="absolute inset-[22%] rounded-full bg-paper border-2 border-gold flex flex-col items-center justify-center text-center p-1 shadow-inner">
        <Award className="w-4 h-4 text-coral mb-0.5" />
        <span className="font-mono text-[10px] font-bold text-ink leading-none">
          {certificateId}
        </span>
        {size !== "sm" && (
          <span className="font-mono text-[7px] font-semibold text-ink-muted uppercase tracking-wider mt-0.5 leading-tight px-1">
            {projectLabel}
          </span>
        )}
      </div>
    </Wrapper>
  );
}
