import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/reel", label: "Reel" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="site-shell mb-10 flex items-end justify-between pt-9 md:mb-14 md:pt-11">
      <Link
        href="/"
        aria-label="James Allchurch — Home"
        className="flex items-center gap-4 md:gap-5"
      >
        <Image
          src="/JAicon2.svg"
          alt=""
          width={56}
          height={56}
          priority
          className="h-12 w-12 shrink-0 object-contain md:h-14 md:w-14"
        />

        <span>
          <span className="block text-[26px] font-medium leading-none tracking-[-0.045em] md:text-[34px]">
            James Allchurch
          </span>

          <span className="mt-2 block text-[22px] leading-none tracking-[-0.035em] text-[#8A8A8A] md:text-[29px]">
            Freelance Motion Designer
          </span>
        </span>
      </Link>

      <nav
        aria-label="Primary navigation"
        className="flex gap-8 pb-0.5 text-[15px] md:gap-12 md:text-[17px]"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[#8A8A8A] transition-colors duration-200 hover:text-[#111111] focus-visible:text-[#111111]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
