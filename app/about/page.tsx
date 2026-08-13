import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="site-shell min-h-[58vh]">
      <section className="grid items-center gap-10 py-10 md:grid-cols-[1.4fr_0.6fr] md:gap-16 md:py-16">

        <div className="space-y-6 text-[19px] leading-[1.6] text-[#555555] md:text-[24px]">
          <p>
            I’m Jim, a freelance motion designer based in Cheltenham, UK.
          </p>

          <p>
            I’ve been creating motion design and animation for over 15 years,
            and I like to bring a thoughtful, engaging approach to every project.
          </p>

          <p>
            I’ve worked with agencies and studios in the UK and US, as well as
            directly with clients, helping bring ideas and brands to life.
          </p>

          <p>
            I’m typically hired for animation roles, using After Effects for
            motion graphics, character animation and compositing. I am equally
            happy designing and illustrating work from scratch or bringing 
            existing designs and brand systems to life.
          </p>

          <p>
            There are often times where I will bring 3D into the mix and 
            will jump into an edit when a project needs it.
          </p>
        </div>

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
}
