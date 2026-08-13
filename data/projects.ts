export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  role: string[];
  vimeoIds?: string[];
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
  vimeoId: ["909428103"],
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
  vimeoId: ["909041024"],
  credits: [],
},
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
  vimeoId: ["909428636"],
  credits: [],
},
  {
  slug: "game-of-thrones-season-4",
  title: "Game of Thrones - Season 4 Premiere",
  category: "Projection Mapping",
  image: "/projects/game-of-thrones.jpg",
  description:
    "Working with Studio Giggle, I helped create this projection-mapped film to celebrate the Game of Thrones Season 4 premiere at Guildhall in London.",
  role: [
    "Animator",
  ],
  vimeoId: ["115794928"],
  credits: [],
},
 {
  slug: "queen-elizabeth-university-hospital",
  title: "Queen Elizabeth University Hospital Glasgow",
  category: "Explainer",
  image: "/projects/queen-elizabeth-hospital.jpg",
  description:
    "At Studio Giggle, I directed and animated this mixed-media explainer introducing the Queen Elizabeth University Hospital Glasgow, using photography captured on site.",
  role: [
    "Director",
    "Animator",
  ],
  vimeoId: ["139060979"],
  credits: [],
},
 {
  slug: "tellermate-cash-office",
  title: "Cash Office by Tellermate",
  category: "Explainer",
  image: "/projects/tellermate-cash-office.jpg",
  description:
    "A direct to client project for Tellermate, where I directed, illustrated and animated an explainer film for their cash counting system.",
  role: [
    "Director",
    "Illustrator",
    "Animator",
  ],
  vimeoId: ["157121784"],
  credits: [],
},
 {
  slug: "notechain",
  title: "Notechain",
  category: "Explainer",
  image: "/projects/notechain.jpg",
  description:
    "A 2D explainer combining motion graphics and character animation to introduce Notechain, a software platform created by Layer 7.",
  role: [
    "Director",
    "Illustrator",
    "Animator",
  ],
  vimeoId: ["200141635"],
  credits: [],
},
{
  slug: "tellermate-overview",
  title: "Tellermate Overview",
  category: "Explainer",
  image: "/projects/tellermate-overview.jpg",
  description:
    "A playful 2D explainer created for Tellermate, using illustration and animation to introduce their services.",
  role: [
    "Director",
    "Illustrator",
    "Animator",
  ],
  vimeoId: ["281262122"],
  credits: [],
},
{
  slug: "nhs-values",
  title: "NHS Values",
  category: "Motion Design",
  image: "/projects/nhs-values.jpg",
  description:
    "A selection of work created for the NHS, combining 2D, 3D and mixed-media animation.",
  role: [
    "Director",
    "Illustrator",
    "2D Animator",
    "3D Animator",
  ],
  vimeoId: ["139131695"],
  credits: [],
},
{
  slug: "ecosurety",
  title: "Ecosurety",
  category: "Motion Design",
  image: "/projects/ecosurety.jpg",
  description:
    "A selection of animated work created for Ecosurety, combining illustration, motion design and 3D.",
  role: [
    "Director",
    "Illustrator",
    "2D Animator",
    "3D Animator",
  ],
  vimeoId: ["139110815"],
  credits: [],
},
{
  slug: "university-of-glasgow",
  title: "University of Glasgow",
  category: "Explainer",
  image: "/projects/university-of-glasgow.jpg",
  description:
    "An awareness film created for the University of Glasgow, focusing on a research project exploring palliative care.",
  role: [
    "Director",
    "Illustrator",
    "2D Animator",
    "3D Animator",
  ],
  vimeoId: ["138590083"],
  credits: [],
},
{
  slug: "personal-work",
  title: "Personal Work",
  category: "Personal",
  image: "/projects/personal-work.jpg",
  description:
    "A short personal film created as a chance to experiment with illustration, animation and motion.",
  role: [
    "Director",
    "Illustrator",
    "2D Animator",
    "3D Animator",
  ],
  vimeoId: ["140711714"],
  credits: [],
},
  {
  slug: "previous-showreels",
  title: "Previous Showreels",
  category: "Showreels",
  image: "/projects/previous-showreels.jpg",
  description:
    "A collection of previous showreels, bringing together motion design, animation and other projects from over the years.",
  role: [
    "Director",
    "Illustrator",
    "Animator",
  ],
  vimeoIds: [
    "138286755",
    "425431968",
  ],
  credits: [],
},
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
