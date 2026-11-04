import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import type { ReactNode } from "react";

import { ScrollReveal } from "./scroll-reveal";
import { ScrollViewportContext } from "./scroll-viewport-context";
import { SiteHeader } from "./site-header";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const currentYear = new Date().getFullYear();

export const SiteShell = ({ children }: { children: ReactNode }) => {
  const viewportRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollViewportContext value={viewportRef}>
      <>
        <a
          className="bg-background fixed top-0 left-6 z-30 translate-y-[-110%] p-3 focus:translate-y-0"
          href="#main"
        >
          Skip to content
        </a>
        <SiteHeader />
        <ScrollArea
          className="h-dvh w-full"
          viewportProps={{
            id: "page-scroll-viewport",
            ref: viewportRef,
            tabIndex: 0,
            "aria-label": "Page content",
          }}
        >
          <div className="flex min-h-dvh flex-col pt-(--header-height)">
            <main className="page-width flex-1" id="main" tabIndex={-1}>
              {children}
            </main>
            <ScrollReveal>
              <footer className="page-width text-muted-foreground flex flex-wrap items-center justify-between gap-4 py-6 text-xs">
                <span>Farkhan Muhammad</span>
                <div className="flex items-center gap-6">
                  <Link
                    className="hover:text-foreground underline transition-colors"
                    to="/resume"
                  >
                    Résumé
                  </Link>
                  <Link
                    className="hover:text-foreground underline transition-colors"
                    to="/certificates"
                  >
                    Certificates
                  </Link>
                </div>
                <span>© {currentYear}</span>
              </footer>
            </ScrollReveal>
          </div>
          <ScrollBar orientation="vertical" className="z-200" />
        </ScrollArea>
      </>
    </ScrollViewportContext>
  );
};
