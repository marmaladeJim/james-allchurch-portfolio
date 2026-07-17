import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.description } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main className="site-shell">
      <div className="mb-8 grid gap-4 md:mb-12 md:grid-cols-[1fr_auto] md:items-end">
        <div><h1 className="text-[42px] font-medium tracking-[-0.05em] md:text-[82px]">{project.title}</h1><p className="mt-2 text-[18px] text-[#8A8A8A] md:text-[22px]">{project.category} · {project.year}</p></div>
        <p className="max-w-xl text-[18px] leading-relaxed text-[#555] md:text-right">{project.description}</p>
      </div>
      <div className="relative aspect-video overflow-hidden bg-black"><Image src={project.image} alt={`${project.title} project artwork`} fill priority className="object-cover" /></div>
      <section className="grid gap-10 border-b border-[#DEDDD8] py-10 md:grid-cols-2 md:py-16">
        <h2 className="text-[22px]">Services</h2>
        <ul className="space-y-2 text-[22px] text-[#555]">{project.services.map((service) => <li key={service}>{service}</li>)}</ul>
      </section>
      <div className="flex justify-end pt-10"><Link href={`/work/${nextProject.slug}`} className="text-[22px] text-[#8A8A8A] transition-colors hover:text-[#111]">Next Project: {nextProject.title} ↗</Link></div>
    </main>
  );
}
