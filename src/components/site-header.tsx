import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";

import { StaggeredMenu } from "./staggered-menu";

export const SiteHeader = () => {
  const reducedMotion = useReducedMotion();

  return (
    <header className="max-tablet:px-6 max-phone:px-3 pointer-events-none fixed inset-x-0 top-0 z-20 flex h-(--header-height) items-center px-14">
      <motion.div
        initial={
          reducedMotion === true
            ? false
            : { opacity: 0, transform: "translateY(-12px)" }
        }
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="intro-content mx-auto flex w-full max-w-[1440px] items-center justify-between gap-2"
      >
        <Link
          aria-label="Farkhan Muhammad home"
          className="font-heading font-wordmark tracking-wordmark pointer-events-auto flex min-h-11 shrink-0 cursor-pointer items-center rounded-full text-lg no-underline"
          to="/"
        >
          <span className="border-border rounded-full border bg-black px-4 py-1.5 leading-5">
            farkhan<span aria-hidden="true">.</span>
          </span>
        </Link>
        <StaggeredMenu />
      </motion.div>
    </header>
  );
};
