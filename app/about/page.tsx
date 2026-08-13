import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="site-shell">
      <section className="grid items-center gap-10 py-10 md:grid-cols-[1.4fr_0.6fr] md:gap-16 md:py-16">
        
        {/* Bio */}
        <div className="space-y-6 text-[19px] leading-[1.6] text-[#555555] md:text-[24px]">
          <p>
            I’m Jim, a freelance motion designer based in Cheltenham, UK.
          </p>

          <p>
            I’ve been creating motion design and animation for over 15 years,
            and I like to bring a thoughtful, engaging approach to every project.
          </p>

          <p>
            I work with agencies and studios in the UK and US, as well as
            directly with clients, helping bring ideas and brands to life.
          </p>

          <p>
            I’m typically hired for animation roles, using After Effects for
            motion graphics, character animation and compositing. I can
            illustrate and design work from scratch or bring existing designs and
            brand systems to life. I also enjoy bringing 3D into the mix and will happily jump into an edit when a project needs it.
          </p>
        </div>

        {/* Portrait */}
        <div className="flex justify-center md:justify-end">
          <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-full">
            <Image
              src="/about.jpg"
              alt="Jim Allchurch"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

      </section>
    </main>
  );
}import type { Metadata } from "next";

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
