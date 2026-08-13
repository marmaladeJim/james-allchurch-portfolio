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
    I’ve been making things move for over 15 years, working with agencies
    and studios on everything from explainers and motion branding to
    projection mapping and social content.
  </p>

  <p>
    I enjoy mixing 2D animation, 3D and illustration, finding the right
    combination to bring an idea to life.
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
{/* Selected Clients */}
<section className="border-t border-[#DEDDD8] py-10 md:py-14">
  <h2 className="mb-6 text-[16px] font-semibold text-[#111111] md:text-[18px]">
    Selected Clients
  </h2>

  <Image
    src="/client-list.png"
    alt="Selected clients"
    width={900}
    height={403}
    className="h-auto w-full max-w-[900px]"
  />
</section>
    </main>
  );
}
