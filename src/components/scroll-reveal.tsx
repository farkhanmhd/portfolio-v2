import { motion, useReducedMotion } from "motion/react";
import { use } from "react";
import type { ReactNode } from "react";

import { ScrollViewportContext } from "./scroll-viewport-context";

export const ScrollReveal = ({ children }: { children: ReactNode }) => {
  const reducedMotion = useReducedMotion();
  const viewportRef = use(ScrollViewportContext);

  if (!viewportRef) {
    throw new Error("ScrollReveal must be used inside SiteShell");
  }

  return (
    <motion.div
      initial={reducedMotion === true ? false : "hidden"}
      viewport={{ root: viewportRef, once: true, amount: 0.2 }}
      whileInView="visible"
    >
      <motion.div
        className="focus-within:transform-none! focus-within:opacity-100! motion-reduce:transform-none! motion-reduce:opacity-100!"
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        variants={{
          hidden: { opacity: 0, transform: "translateY(24px)" },
          visible: { opacity: 1, transform: "translateY(0px)" },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
