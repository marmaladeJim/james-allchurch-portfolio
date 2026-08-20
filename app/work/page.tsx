import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main className="site-shell">
      <h1 className="mb-10 text-[22px] font-medium tracking-[-0.02em] md:mb-14 md:text-[64px]">Selected Work</h1>
      <section className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-4">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </section>
    </main>
  );
}
