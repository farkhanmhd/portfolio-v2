// Preserve the owner's existing rounded hero buttons while changing only their entrance.
/* oxlint-disable shadcn/no-restyle */
import { GithubIcon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, useReducedMotion } from "motion/react";

import { DecryptedText } from "./decrypted-text";
import { Button } from "./ui/button";

export const Hero = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="min-h-hero-panel flex flex-col items-center justify-center gap-10 py-10 text-center"
    >
      <h1
        className="max-tablet:text-display-tablet max-phone:text-display-phone text-display leading-display tracking-display m-0"
        id="hero-title"
      >
        <span className="sr-only">From interface to infrastructure.</span>
        <span aria-hidden="true">
          {["From interface", "to infrastructure."].map((line, index) => (
            <motion.span
              animate={{ opacity: 1, transform: "translateY(0)" }}
              className="block whitespace-nowrap motion-reduce:transform-none! motion-reduce:opacity-100!"
              initial={
                reducedMotion === true
                  ? false
                  : { opacity: 0, transform: "translateY(20px)" }
              }
              key={line}
              transition={{
                duration: 0.55,
                delay: 0.15 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <DecryptedText delay={0.55 + index * 0.15} text={line} />
            </motion.span>
          ))}
        </span>
      </h1>
      <motion.p
        initial={
          reducedMotion === true
            ? false
            : { opacity: 0, transform: "translateY(12px)" }
        }
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.45, delay: 1.8 }}
        className="intro-content text-muted-foreground max-phone:text-sm max-w-xl text-base"
      >
        I build web applications from end to end.
      </motion.p>
      <motion.div
        initial={
          reducedMotion === true
            ? false
            : { opacity: 0, transform: "translateY(12px)" }
        }
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.45, delay: 2 }}
        className="intro-content flex flex-wrap justify-center gap-4"
      >
        <Button
          asChild
          className="min-h-11 min-w-28 rounded-2xl"
          size="lg"
          variant="ghost"
        >
          <a href="mailto:farkhanmuhammad@outlook.com">
            <HugeiconsIcon
              aria-hidden="true"
              data-icon="inline-start"
              icon={Mail01Icon}
            />
            Contact
          </a>
        </Button>
        <Button
          asChild
          className="min-h-11 min-w-28 rounded-2xl"
          size="lg"
          variant="ghost"
        >
          <a
            href="https://github.com/farkhanmhd"
            rel="noopener noreferrer"
            target="_blank"
          >
            <HugeiconsIcon
              aria-hidden="true"
              data-icon="inline-start"
              icon={GithubIcon}
            />
            GitHub
          </a>
        </Button>
      </motion.div>
    </section>
  );
};
