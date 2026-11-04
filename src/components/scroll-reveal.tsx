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
        className="focus-within:opacity-100! focus-within:[clip-path:inset(0)]! motion-reduce:opacity-100! motion-reduce:[clip-path:inset(0)]!"
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        variants={{
          hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
          visible: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
