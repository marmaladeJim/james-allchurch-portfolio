import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  return project
    ? {
        title: project.title,
        description: project.description,
      }
    : {};
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = projects.findIndex(
    (item) => item.slug === project.slug
  );

  const nextProject =
    projects[(index + 1) % projects.length];

  return (
    <main className="site-shell">

    {/* Project title */}
<div className="mb-6 md:mb-8">
  <h1 className="text-[32px] font-normal tracking-[-0.03em] md:text-[48px]">
    {project.title}
  </h1>
</div>

    {/* Project video(s) or image */}
{project.vimeoIds && project.vimeoIds.length > 0 ? (
  <div className="space-y-4 md:space-y-6">
    {project.vimeoIds.map((vimeoId, index) => (
      <div
        key={vimeoId}
        className="relative aspect-video overflow-hidden bg-black"
      >
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
          title={`${project.title} video ${index + 1}`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    ))}
  </div>
) : (
  <div className="relative aspect-video overflow-hidden bg-black">
    <Image
      src={project.image}
      alt={`${project.title} project artwork`}
      fill
      priority
      className="object-cover"
    />
  </div>
)}

      {/* Project description */}
      <section className="border-b border-[#DEDDD8] py-8 text-center md:py-12">
        <p className="text-[18px] leading-[1.6] text-[#555555] md:text-[22px]">
          {project.description}
        </p>
      </section>

     {/* Role */}
{project.role.length > 0 && (
  <section className="grid gap-6 border-b border-[#DEDDD8] py-8 md:grid-cols-[150px_1fr] md:py-12">
    <h2 className="text-[18px] font-semibold">
      Role
    </h2>

    <ul className="space-y-2 text-[18px] text-[#555555]">
      {project.role.map((role) => (
        <li key={role}>{role}</li>
      ))}
    </ul>
  </section>
)}

      {/* Next project */}
      <div className="flex justify-end pt-10">
        <Link
          href={`/work/${nextProject.slug}`}
          className="text-[18px] text-[#8A8A8A] transition-colors duration-200 hover:text-[#111111]"
        >
          Next Project: {nextProject.title} ↗
        </Link>
      </div>

    </main>
  );
}
