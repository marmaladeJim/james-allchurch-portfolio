import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative aspect-video overflow-hidden bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width:768px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 flex items-end justify-between bg-black/45 p-3 text-white opacity-100 transition-all duration-300 md:p-5 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">

        <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="text-[15px] font-medium tracking-tight md:text-lg">
            {project.title}
          </h3>

          <p className="mt-0.5 text-[11px] text-white/70 md:mt-1 md:text-sm">
            {project.category}
          </p>
        </div>

        <ArrowIcon className="size-4 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:size-5" />

      </div>
    </Link>
  );
}
