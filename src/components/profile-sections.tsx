import {
  InstagramIcon,
  Linkedin01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";

import { employmentDuration } from "../lib/employment-duration";
import { CertificationsCarousel } from "./certifications-carousel";
import { ScrollReveal } from "./scroll-reveal";

const skills = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "shadcn/ui", "Tailwind CSS"],
  },
  {
    title: "Backend & Languages",
    items: [
      "TypeScript",
      "Bun",
      "NodeJS",
      "ElysiaJS",
      "Golang",
      "Golang Fiber",
      "REST API",
      "GraphQL",
    ],
  },
  {
    title: "Data & Cloud",
    items: ["AWS", "Drizzle-ORM", "Supabase", "PostgreSQL", "MySQL"],
  },
];

const certifications = [
  {
    description: "An introduction to programming with Go.",
    issuer: "Programmer Zaman Now",
    period: "Sep 2026",
    title: "Basic Go-Lang Certification",
  },
  {
    description: "Procurement workflows and business processes in SAP.",
    issuer: "SAP & Edugate",
    period: "Jul 2025",
    title: "SAP SCM500: Business Processes in Procurement",
  },
  {
    description: "Financial accounting processes in SAP.",
    issuer: "SAP & Edugate",
    period: "Completed",
    title: "SAP AC010: Business Processes in Financial Accounting",
  },
  {
    description: "An overview of SAP and its business applications.",
    issuer: "SAP & Edugate",
    period: "Completed",
    title: "SAP SAP01: SAP Overview",
  },
  {
    description: "Core concepts for building back-end applications.",
    issuer: "Dicoding",
    period: "Aug 2024",
    title: "Back-End Application Fundamentals",
  },
  {
    description: "Foundations of application architecture on AWS.",
    issuer: "Dicoding",
    period: "Jul 2024",
    title: "Architecting on AWS",
  },
  {
    description: "An introduction to machine learning concepts.",
    issuer: "Dicoding",
    period: "May 2024",
    title: "Machine Learning for Beginners",
  },
  {
    description: "Getting started with the Python programming language.",
    issuer: "Dicoding",
    period: "Apr 2024",
    title: "Getting Started with Python Programming",
  },
  {
    description: "Fundamentals of communicating data through visualizations.",
    issuer: "Dicoding",
    period: "Apr 2024",
    title: "Data Visualization Fundamentals",
  },
  {
    description: "An introduction to building back-end applications.",
    issuer: "Dicoding",
    period: "Apr 2024",
    title: "Building Back-End Applications for Beginners",
  },
  {
    description: "An introduction to cloud computing with AWS.",
    issuer: "Dicoding",
    period: "Apr 2024",
    title: "Cloud Practitioner Essentials (AWS Cloud Fundamentals)",
  },
  {
    description: "Advanced concepts for developing React web applications.",
    issuer: "Dicoding",
    period: "Mar 2024",
    title: "Become a React Web Developer Expert",
  },
  {
    description: "Core concepts for developing applications with React.",
    issuer: "Dicoding",
    period: "Jan 2024",
    title: "React Web Application Fundamentals",
  },
  {
    description: "An introduction to building web applications with React.",
    issuer: "Dicoding",
    period: "Oct 2023",
    title: "Building Web Applications with React",
  },
  {
    description: "Getting started with front-end web development.",
    issuer: "Dicoding",
    period: "Oct 2023",
    title: "Building Front-End Web for Beginners",
  },
  {
    description: "Fundamentals of the JavaScript programming language.",
    issuer: "Dicoding",
    period: "Sep 2023",
    title: "JavaScript Programming Fundamentals",
  },
  {
    description: "An introduction to web programming concepts.",
    issuer: "Dicoding",
    period: "Sep 2023",
    title: "Web Programming Fundamentals",
  },
];

const awards = [
  {
    award: "Academic Achievement Scholarship (Beasiswa Akademik Mikroskil)",
    description:
      "Awarded for exceptional academic excellence with a 4.00 Semester GPA and 94 Final Average Grade in Information Systems.",
    institution: "Universitas Mikroskil",
    period: "Odd Semester 2024/2025",
  },
];

const EmploymentDuration = () => {
  const [duration, setDuration] = useState(() =>
    employmentDuration(new Date())
  );

  useEffect(() => {
    // Refresh long-lived tabs as well as new visits, without per-frame updates.
    const interval = window.setInterval(() => {
      setDuration(employmentDuration(new Date()));
    }, 60_000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return <span>{duration}</span>;
};

export const ProfileSections = () => (
  <div className="mx-auto max-w-5xl">
    <section
      aria-labelledby="journey-title"
      className="profile-section"
      id="journey"
    >
      <ScrollReveal>
        <h2
          className="text-contact leading-profile tracking-display"
          id="journey-title"
        >
          Journey
        </h2>
        <div className="max-tablet:grid-cols-1 max-phone:mt-10 mt-16 grid grid-cols-2 gap-12">
          <div>
            <h3
              className="text-muted-foreground mb-6 text-sm font-normal"
              id="experience-title"
            >
              Experience
            </h3>
            <h4 className="font-heading text-profile leading-profile tracking-profile">
              Fullstack Programmer
            </h4>
            <p className="mt-3">PT Alfa Scorpii</p>
            <p className="text-muted-foreground mt-6 text-sm">
              <time dateTime="2024-09-01">1 September 2024</time> to present
            </p>
            <p className="text-muted-foreground text-sm">
              <EmploymentDuration />
            </p>
          </div>
          <div
            className="scroll-mt-[calc(var(--header-height)+24px)]"
            id="education"
          >
            <h3
              className="text-muted-foreground mb-6 text-sm font-normal"
              id="education-title"
            >
              Education
            </h3>
            <h4 className="font-heading text-profile leading-profile tracking-profile">
              Universitas Mikroskil
            </h4>
            <p className="mt-3">Bachelor’s degree in Information Systems</p>
            <p className="text-muted-foreground mt-6 text-sm">
              Graduated · GPA 3.71
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
    <section
      aria-labelledby="skills-title"
      className="profile-section"
      id="skills"
    >
      <ScrollReveal>
        <h2
          className="text-contact leading-profile tracking-display"
          id="skills-title"
        >
          Skills
        </h2>
        <div className="max-phone:mt-8 max-phone:gap-10 mt-12 flex flex-col gap-12">
          {skills.map((group) => (
            <div className="profile-row" key={group.title}>
              <h3 className="text-muted-foreground pt-1 text-sm font-normal">
                {group.title}
              </h3>
              <ul className="font-heading text-profile leading-profile tracking-profile flex flex-wrap gap-x-8 gap-y-4">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
    <section
      aria-labelledby="certifications-title"
      className="profile-section"
      id="certifications"
    >
      <ScrollReveal>
        <h2
          className="max-phone:text-section-phone text-contact leading-profile tracking-display"
          id="certifications-title"
        >
          Certifications
        </h2>
        <CertificationsCarousel items={certifications} />
      </ScrollReveal>
    </section>
    <section
      aria-labelledby="awards-title"
      className="profile-section min-h-0 py-16"
      id="awards"
    >
      <ScrollReveal>
        <h2
          className="text-contact leading-profile tracking-display"
          id="awards-title"
        >
          Awards
        </h2>
        <div className="max-phone:mt-8 max-phone:gap-10 mt-12 flex flex-col gap-10">
          {awards.map((item) => (
            <div className="profile-row" key={item.award}>
              <div className="text-muted-foreground pt-1 text-sm font-normal">
                <p>{item.institution}</p>
                <p className="mt-1">{item.period}</p>
              </div>
              <div>
                <h3 className="font-heading text-profile leading-profile tracking-profile">
                  {item.award}
                </h3>
                <p className="text-muted-foreground mt-4 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
    <section
      aria-labelledby="contact-title"
      className="profile-section text-center contain-[inline-size]"
      id="contact"
    >
      <ScrollReveal>
        <h2
          className="text-contact leading-profile tracking-display"
          id="contact-title"
        >
          Let’s talk.
        </h2>
        <div className="mt-8 overflow-x-auto py-2">
          <div className="flex w-max min-w-full items-center justify-center gap-8 text-lg whitespace-nowrap">
            <a
              className="inline-flex min-h-11 cursor-pointer items-center"
              href="mailto:farkhanmuhammad@outlook.com"
            >
              <HugeiconsIcon
                aria-hidden="true"
                className="mr-1.5 size-5"
                icon={Mail01Icon}
              />
              Email
            </a>
            <a
              className="inline-flex min-h-11 cursor-pointer items-center"
              href="https://www.linkedin.com/in/farkhanmhd/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <HugeiconsIcon
                aria-hidden="true"
                className="mr-1.5 size-5"
                icon={Linkedin01Icon}
              />
              LinkedIn
            </a>
            <a
              className="inline-flex min-h-11 cursor-pointer items-center"
              href="https://instagram.com/farkhanmhd"
              rel="noopener noreferrer"
              target="_blank"
            >
              <HugeiconsIcon
                aria-hidden="true"
                className="mr-1.5 size-5"
                icon={InstagramIcon}
              />
              Instagram
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  </div>
);
