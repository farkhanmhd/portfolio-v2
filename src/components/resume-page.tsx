import { Link } from "@tanstack/react-router";

import { MetaHead } from "./meta-head";

export const ResumePage = () => (
  <div className="mx-auto flex w-full max-w-5xl flex-col py-8">
    <MetaHead
      canonicalPath="/resume"
      description="View and download the full-stack developer résumé / CV of Farkhan Muhammad."
      title="Résumé — Farkhan Muhammad"
    />
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-heading text-profile leading-profile tracking-profile">
          Résumé
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Full-Stack Developer · Curriculum Vitae
        </p>
      </div>
      <div className="flex items-center gap-4">
        <a
          className="hover:bg-accent focus-visible:outline-ring/50 border-border inline-flex min-h-11 items-center justify-center rounded-full border px-4 text-sm font-medium transition-colors"
          download="Farkhan_Muhammad_Resume.pdf"
          href="/Farkhan_Muhammad_Resume.pdf"
        >
          Download PDF
        </a>
        <Link
          className="hover:bg-accent focus-visible:outline-ring/50 border-border inline-flex min-h-11 items-center justify-center rounded-full border px-4 text-sm font-medium transition-colors"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
    <div className="border-border bg-card overflow-hidden rounded-xl border">
      <object
        className="h-[calc(100dvh-var(--header-height)-160px)] min-h-[600px] w-full"
        data="/Farkhan_Muhammad_Resume.pdf"
        type="application/pdf"
      >
        <div className="flex h-full min-h-[400px] flex-col items-center justify-center p-8 text-center">
          <p className="text-muted-foreground mb-4">
            It looks like your browser doesn&apos;t support embedded PDFs.
          </p>
          <a
            className="hover:bg-accent focus-visible:outline-ring/50 border-border inline-flex min-h-11 items-center justify-center rounded-full border px-4 text-sm font-medium transition-colors"
            download="Farkhan_Muhammad_Resume.pdf"
            href="/Farkhan_Muhammad_Resume.pdf"
          >
            Download Farkhan_Muhammad_Resume.pdf
          </a>
        </div>
      </object>
    </div>
  </div>
);
