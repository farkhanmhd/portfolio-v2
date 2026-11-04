import { useRef } from "react";
import type { ReactNode } from "react";

import { ScrollReveal } from "./scroll-reveal";
import { ScrollViewportContext } from "./scroll-viewport-context";
import { SiteHeader } from "./site-header";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

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
          <div className="pt-(--header-height)">
            <main className="page-width" id="main" tabIndex={-1}>
              {children}
            </main>
            <ScrollReveal>
              <footer className="page-width border-line text-muted-foreground flex justify-between border-t py-6 text-xs">
                Farkhan Muhammad{" "}
                <a href="mailto:farkhanmuhammad@outlook.com">Get in touch</a>
              </footer>
            </ScrollReveal>
          </div>
          <ScrollBar orientation="vertical" className="z-200" />
        </ScrollArea>
      </>
    </ScrollViewportContext>
  );
};
