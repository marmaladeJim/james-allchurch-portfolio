import { ProjectCard } from "@/components/project-card";
import { Showreel } from "@/components/showreel";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="site-shell">
      <Showreel />
      <section aria-label="Selected Work" className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-4">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </section>
    </main>
  );
}
