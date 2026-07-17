import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group relative aspect-[16/8.6] overflow-hidden bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
      <Image src={project.image} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.025]" />
      <span className="absolute inset-0 flex items-end justify-between bg-black/40 p-3.5 text-white opacity-100 transition-opacity duration-200 md:p-5 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
        <span>
          <span className="block text-[14px] md:text-[17px]">{project.title}</span>
          <span className="mt-0.5 hidden text-[12px] text-white/75 md:block">{project.category}</span>
        </span>
        <ArrowIcon className="size-4 md:size-5" />
      </span>
    </Link>
  );
}
