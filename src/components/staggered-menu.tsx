import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Dialog } from "radix-ui";
import { useState } from "react";

// Adapted from the supplied React Bits StaggeredMenu: layered sweep and staggered labels.
// Radix supplies focus management, Escape, outside dismissal, and focus return.
const MenuPanel = ({ close }: { close: () => void }) => {
  const reducedMotion = useReducedMotion();

  const slide = {
    hidden: { transform: "translateX(100%)" },
    visible: (delay: number) => ({
      transform: "translateX(0%)",
      transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  const label = {
    hidden: { transform: "translateY(24px)", opacity: 0 },
    visible: (index: number) => ({
      transform: "translateY(0px)",
      opacity: 1,
      transition: { duration: 0.5, delay: 0.25 + index * 0.08 },
    }),
  };

  return (
    <motion.div
      animate="visible"
      className="relative h-full"
      initial={reducedMotion === true ? false : "hidden"}
    >
      <motion.div
        aria-hidden="true"
        className="menu-layer bg-accent absolute inset-0"
        custom={0}
        variants={slide}
      />
      <motion.div
        aria-hidden="true"
        className="menu-layer bg-secondary absolute inset-0"
        custom={0.07}
        variants={slide}
      />
      <motion.div
        className="menu-surface bg-background max-phone:px-6 max-phone:pt-6 relative flex h-full flex-col overflow-y-auto px-10 pt-10 pb-8"
        custom={0.12}
        variants={slide}
      >
        <div className="flex items-center justify-between gap-6">
          <Dialog.Title className="text-muted-foreground m-0 text-sm font-normal">
            Menu
          </Dialog.Title>
          <Dialog.Close className="hover:bg-accent min-h-11 cursor-pointer rounded-full px-4 text-sm transition-colors">
            Close
          </Dialog.Close>
        </div>
        <Dialog.Description className="sr-only">
          Explore selected work, résumé, and contact links.
        </Dialog.Description>
        <nav aria-label="Main navigation" className="my-auto py-14">
          <ul className="font-heading max-phone:text-4xl flex flex-col gap-5 text-5xl font-medium tracking-tight">
            <motion.li className="py-1" custom={0} variants={label}>
              <Link
                className="menu-label inline-flex min-h-11 cursor-pointer items-center no-underline"
                hash="work"
                hashScrollIntoView={{
                  behavior: reducedMotion === true ? "instant" : "smooth",
                  block: "start",
                }}
                onClick={close}
                to="/"
              >
                Work
              </Link>
            </motion.li>
            <motion.li className="py-1" custom={1} variants={label}>
              <a
                className="menu-label inline-flex min-h-11 cursor-pointer items-center no-underline"
                href="https://drive.google.com/file/d/1mb-CPqJSxnHa2YIgsT_DR5-y20rncqrL/view?usp=sharing"
                onClick={close}
                rel="noopener noreferrer"
                target="_blank"
              >
                Résumé
              </a>
            </motion.li>
            <motion.li className="py-1" custom={2} variants={label}>
              <a
                className="menu-label inline-flex min-h-11 cursor-pointer items-center no-underline"
                href="mailto:farkhanmuhammad@outlook.com"
                onClick={close}
              >
                Let’s talk
              </a>
            </motion.li>
          </ul>
        </nav>
        <motion.a
          className="menu-label flex min-h-11 w-fit items-center text-sm"
          href="https://github.com/farkhanmhd"
          rel="noopener noreferrer"
          target="_blank"
          custom={3}
          variants={label}
        >
          GitHub
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export const StaggeredMenu = () => {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Trigger className="group pointer-events-auto flex min-h-11 cursor-pointer items-center rounded-full text-sm">
        <span className="border-border group-hover:border-foreground/50 flex items-center gap-3 rounded-full border bg-black px-4 py-1.5 transition-colors">
          Menu
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 group-hover:rotate-90 motion-reduce:transition-none"
          >
            +
          </span>
        </span>
      </Dialog.Trigger>
      <Dialog.Portal forceMount>
        <AnimatePresence>
          {open && (
            <motion.div
              key="menu"
              className="menu-backdrop fixed inset-0"
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion === true ? 0 : 0.22 }}
            >
              <Dialog.Overlay
                forceMount
                className="menu-backdrop fixed inset-0 bg-black/60"
              />
              <Dialog.Content forceMount asChild>
                <motion.div
                  className="staggered-panel fixed inset-y-0 right-0 w-full max-w-lg overflow-hidden outline-none"
                  exit={{
                    transform:
                      reducedMotion === true ? "none" : "translateX(100%)",
                  }}
                  transition={{ duration: reducedMotion === true ? 0 : 0.22 }}
                >
                  <MenuPanel
                    close={() => {
                      setOpen(false);
                    }}
                  />
                </motion.div>
              </Dialog.Content>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
