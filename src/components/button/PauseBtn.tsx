import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";

const baseRectVariants: Variants = {
  normal: {
    y: 0,
  },
};

const baseRectTransition = {
  transition: {
    times: [0, 0.2, 0.5, 1],
    duration: 0.5,
    stiffness: 260,
    damping: 20,
  },
};

const leftRectVariants: Variants = {
  ...baseRectVariants,
  animate: {
    y: [0, 2, 0, 0],
    ...baseRectTransition,
  },
};

const rightRectVariants: Variants = {
  ...baseRectVariants,
  animate: {
    y: [0, 0, 2, 0],
    ...baseRectTransition,
  },
};

const PauseBtn = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.rect
          x="6"
          y="4"
          width="4"
          height="16"
          rx="1"
          variants={leftRectVariants}
          animate={controls}
        />
        <motion.rect
          x="14"
          y="4"
          width="4"
          height="16"
          rx="1"
          variants={rightRectVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { PauseBtn };
