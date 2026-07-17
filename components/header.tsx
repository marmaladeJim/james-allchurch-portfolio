import Link from "next/link";

export function Header() {
  return (
    <header className="site-shell flex items-end justify-between pt-9 md:pt-11 mb-10 md:mb-14">
      <div>
        <Link href="/" className="block text-[26px] md:text-[34px] leading-none font-medium tracking-[-0.045em]">James Allchurch</Link>
        <p className="mt-2 text-[22px] md:text-[29px] leading-none tracking-[-0.035em] text-[#8A8A8A]">Freelance Motion Designer</p>
      </div>
      <nav aria-label="Primary navigation" className="flex gap-8 md:gap-12 pb-0.5 text-[15px] md:text-[17px]">
        <Link className="text-[#8A8A8A] transition-colors duration-200 hover:text-[#111111] focus-visible:text-[#111111]" href="/work">Work</Link>
        <Link className="text-[#8A8A8A] transition-colors duration-200 hover:text-[#111111] focus-visible:text-[#111111]" href="/about">About</Link>
      </nav>
    </header>
  );
}
