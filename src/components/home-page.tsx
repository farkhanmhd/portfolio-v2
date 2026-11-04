import { Hero } from "./hero";
import { MetaHead } from "./meta-head";
import { ProfileSections } from "./profile-sections";

const personJsonLdString = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Farkhan Muhammad",
  url: "https://farkhanmhd.vercel.app",
  jobTitle: "Full-Stack Developer",
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Bun",
    "Golang",
    "Golang Fiber",
    "ElysiaJS",
    "AWS",
    "Drizzle-ORM",
    "PostgreSQL",
    "GraphQL",
    "REST API",
  ],
  sameAs: [
    "https://github.com/farkhanmhd",
    "https://www.linkedin.com/in/farkhanmhd/",
    "https://instagram.com/farkhanmhd",
  ],
});

export const HomePage = () => (
  <div className="pb-16">
    <MetaHead
      canonicalPath="/"
      description="Full-stack developer portfolio building scalable web applications from interface to infrastructure with Next.js, React, TypeScript, Bun, Golang, and Cloud."
      jsonLdContent={personJsonLdString}
      title="Farkhan Muhammad — Full-Stack Developer"
    />
    <Hero />
    <ProfileSections />
  </div>
);
