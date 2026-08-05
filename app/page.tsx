import { ProjectCard } from "@/components/project-card";
import { Showreel } from "@/components/showreel";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="site-shell">
      <Showreel />

      <div className="max-w-3xl py-8 md:py-10">
        <p className="text-[22px] leading-[1.2] tracking-[-0.03em] md:text-[34px]">
          I’m James Allchurch, a freelance motion designer based in Cheltenham, UK. 
          I create animation and motion graphics for brands, agencies and studios. 
        </p>
      </div>

      <section
        aria-label="Selected Work"
        className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-4"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
