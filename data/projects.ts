export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  services: string[];
  vimeoId?: string;
  credits?: string[];
};

export const projects: Project[] = [
{
  slug: "adidas-socials",
  title: "Adidas Socials",
  category: "Social Content",
  year: "2024",
  image: "/projects/adidas-socials.jpg",
  description: "",
  services: [],
  vimeoId: "909428103",
  credits: [],
},
  {
    slug: "a-cp-company",
    title: "A CP Company",
    category: "Brand Film",
    year: "2026",
    image: "/projects/acp.svg",
    description:
      "A dark, technical brand film exploring material, utility and movement through a restrained visual system.",
    services: ["Creative Direction", "Motion Design", "Compositing"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "samsung",
    title: "Samsung",
    category: "Product Film",
    year: "2025",
    image: "/projects/samsung.svg",
    description:
      "A minimal product animation balancing sculptural form, soft light and graphic precision.",
    services: ["3D Animation", "Look Development", "Compositing"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "nike-air",
    title: "Nike Air",
    category: "Brand Film",
    year: "2025",
    image: "/projects/nike.svg",
    description:
      "A high-energy brand film pairing bold typography with atmospheric lighting and fast transitions.",
    services: ["Motion Design", "Animation", "Typography"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "spectrum",
    title: "Spectrum",
    category: "Music Video",
    year: "2025",
    image: "/projects/spectrum.svg",
    description:
      "An abstract music visual driven by luminous colour, depth and evolving geometric movement.",
    services: ["Direction", "Design", "Animation"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "nothing",
    title: "Nothing",
    category: "Product Film",
    year: "2025",
    image: "/projects/nothing.svg",
    description:
      "A monochrome architectural study using repetition, shadow and mechanical motion.",
    services: ["3D Animation", "Lighting", "Compositing"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "orbit",
    title: "Orbit",
    category: "Title Sequence",
    year: "2024",
    image: "/projects/orbit.svg",
    description:
      "A meditative sequence of orbital motion, subtle distortion and controlled luminosity.",
    services: ["Motion Design", "Simulation", "Compositing"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "squarespace",
    title: "Squarespace",
    category: "Brand Film",
    year: "2024",
    image: "/projects/squarespace.svg",
    description:
      "A graphic brand piece using simple forms, tactile timing and playful spatial relationships.",
    services: ["Design", "Animation", "Art Direction"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "the-parallel",
    title: "The Parallel",
    category: "Short Film",
    year: "2024",
    image: "/projects/parallel.svg",
    description:
      "A dark speculative short exploring identity through dramatic portraiture and digital transformation.",
    services: ["Direction", "VFX", "Motion Design"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "google",
    title: "Google",
    category: "Campaign",
    year: "2024",
    image: "/projects/google.svg",
    description:
      "A soft, fluid campaign film combining organic surfaces with a calm and premium visual language.",
    services: ["Motion Design", "3D Animation", "Look Development"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "metamorph",
    title: "Metamorph",
    category: "Music Video",
    year: "2023",
    image: "/projects/metamorph.svg",
    description:
      "A polished transformation study featuring liquid-metal surfaces and close-up cinematic detail.",
    services: ["Direction", "3D Animation", "Compositing"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "beats-by-dr-dre",
    title: "Beats By Dr. Dre",
    category: "Brand Film",
    year: "2023",
    image: "/projects/beats.svg",
    description:
      "A sound-led brand film built from light pulses, sharp edits and a disciplined monochrome palette.",
    services: ["Motion Design", "Editing", "Animation"],
    vimeoId: "",
    credits: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
