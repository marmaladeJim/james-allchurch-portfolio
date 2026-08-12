import { ProjectCard } from "@/components/project-card";
import { Showreel } from "@/components/showreel";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="site-shell">
     <section className="mx-auto max-w-6xl py-6 text-center md:py-10">
  <p className="text-[22px] font-normal leading-[1.4] tracking-[-0.02em] text-[#222222] md:text-[34px]">
    Hi, I'm Jim, a freelance motion designer in Cheltenham, UK. I create
    animation and motion graphics for brands, agencies and studios.
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
