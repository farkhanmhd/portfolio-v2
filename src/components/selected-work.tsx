import { Link } from "@tanstack/react-router";

interface ProjectSummary {
  slug: string;
  title: string;
  summary: string;
  capabilities: readonly string[];
}

export const SelectedWork = ({
  projects,
}: {
  projects: readonly ProjectSummary[];
}) => (
  <section
    aria-labelledby="work-title"
    className="max-phone:pt-10 scroll-mt-[calc(var(--header-height)+24px)] pt-14"
    id="work"
  >
    <h2 className="mb-5 text-2xl" id="work-title">
      Selected work
    </h2>
    {projects.map((project) => (
      <div
        className="bg-card max-phone:p-5 p-8 not-first:mt-6"
        key={project.slug}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-heading text-project tracking-profile leading-tight">
            {project.title}
          </h3>
          <span className="text-muted-foreground text-xs">
            Case study in progress
          </span>
        </div>
        <p className="text-muted-foreground mt-4 text-sm">{project.summary}</p>
        <ul className="mt-5 flex flex-col gap-1 text-sm">
          {project.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
        <Link
          className="text-highlight mt-6 inline-block py-2 underline"
          params={{ slug: project.slug }}
          to="/projects/$slug"
        >
          Read project notes
        </Link>
      </div>
    ))}
  </section>
);
