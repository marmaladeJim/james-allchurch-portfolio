import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="site-shell min-h-[58vh]">
      <h1 className="mb-10 text-[42px] font-medium tracking-[-0.05em] md:mb-16 md:text-[82px]">About</h1>
      <div className="max-w-5xl space-y-8 text-[28px] leading-[1.15] tracking-[-0.045em] md:text-[52px]">
        <p>I’m James Allchurch, A Freelance Motion Designer Creating Animation, Brand Films, Title Sequences And Digital Content.</p>
        <p>I Work With Agencies, Studios And Direct Clients Across Motion Design, 2D And 3D Animation, Art Direction And Visual Development.</p>
      </div>
      <a href="mailto:jimallchurch@gmail.com" className="mt-16 inline-block text-[18px] text-[#8A8A8A] transition-colors hover:text-[#111111]">Get In Touch ↗</a>
    </main>
  );
}
