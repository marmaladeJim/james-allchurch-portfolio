import { ProjectCard } from "@/components/project-card";
import { Showreel } from "@/components/showreel";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="mx-auto max-w-6xl py-6 md:py-10 text-center">
        <p className="text-[22px] md:text-[34px] font-normal leading-[1.4] tracking-[-0.02em] text-[#222222]">
          Hi, I'm Jim. I'm a freelance motion designer based in Cheltenham, UK,
          working with brands, agencies and studios to create animation and
          motion graphics.
        </p>
      </section>

      <Showreel />

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
