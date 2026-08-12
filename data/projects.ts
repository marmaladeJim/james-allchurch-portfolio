export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  role: string[];
  vimeoId?: string;
  credits?: string[];
};

export const projects: Project[] = [
{
  slug: "adidas-socials",
  title: "Adidas Socials",
  category: "Social Content",
  image: "/projects/adidas-socials.jpg",
  description:
    "A selection of work created with Zero TMC for adidas, designed for use across social media and live events.",
 role: [
  "Motion Design",
  "3D",
],
  vimeoId: "909428103",
  credits: [],
},
  {
  slug: "ncnr",
  title: "NCNR",
  category: "Explainer",
  image: "/projects/ncnr.jpg",
  description:
    "Working with Beeston Media, I directed and animated this short film for the National Centre for Nuclear Robotics.",
  role: [
    "Director",
    "Illustrator",
    "Animator",
  ],
  vimeoId: "909041024",
  credits: [],
{
  slug: "adidas-city-run",
  title: "Adidas - City Run",
  category: "Social Content",
  image: "/projects/adidas-city-run.jpg",
  description:
    "Working with Zero TMC, I animated this energetic 15-second film promoting an upcoming running event through London.",
  role: [
    "Animator",
  ],
  vimeoId: "909428636",
  credits: [],
},
  {
    slug: "nike-air",
    title: "Nike Air",
    category: "Brand Film",
    image: "/projects/nike.svg",
    description:
      "A high-energy brand film pairing bold typography with atmospheric lighting and fast transitions.",
    role: ["Motion Design", "Animation", "Typography"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "spectrum",
    title: "Spectrum",
    category: "Music Video",
    image: "/projects/spectrum.svg",
    description:
      "An abstract music visual driven by luminous colour, depth and evolving geometric movement.",
    role: ["Direction", "Design", "Animation"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "nothing",
    title: "Nothing",
    category: "Product Film",
    image: "/projects/nothing.svg",
    description:
      "A monochrome architectural study using repetition, shadow and mechanical motion.",
    role: ["3D Animation", "Lighting", "Compositing"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "orbit",
    title: "Orbit",
    category: "Title Sequence",
    image: "/projects/orbit.svg",
    description:
      "A meditative sequence of orbital motion, subtle distortion and controlled luminosity.",
    role: ["Motion Design", "Simulation", "Compositing"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "squarespace",
    title: "Squarespace",
    category: "Brand Film",
    image: "/projects/squarespace.svg",
    description:
      "A graphic brand piece using simple forms, tactile timing and playful spatial relationships.",
    role: ["Design", "Animation", "Art Direction"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "the-parallel",
    title: "The Parallel",
    category: "Short Film",
    image: "/projects/parallel.svg",
    description:
      "A dark speculative short exploring identity through dramatic portraiture and digital transformation.",
    role: ["Direction", "VFX", "Motion Design"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "google",
    title: "Google",
    category: "Campaign",
    image: "/projects/google.svg",
    description:
      "A soft, fluid campaign film combining organic surfaces with a calm and premium visual language.",
    role: ["Motion Design", "3D Animation", "Look Development"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "metamorph",
    title: "Metamorph",
    category: "Music Video",
    image: "/projects/metamorph.svg",
    description:
      "A polished transformation study featuring liquid-metal surfaces and close-up cinematic detail.",
    role: ["Direction", "3D Animation", "Compositing"],
    vimeoId: "",
    credits: [],
  },
  {
    slug: "beats-by-dr-dre",
    title: "Beats By Dr. Dre",
    category: "Brand Film",
    image: "/projects/beats.svg",
    description:
      "A sound-led brand film built from light pulses, sharp edits and a disciplined monochrome palette.",
    role: ["Motion Design", "Editing", "Animation"],
    vimeoId: "",
    credits: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
