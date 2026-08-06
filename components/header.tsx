import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/reel", label: "Reel" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="site-shell flex items-center justify-between pt-9 pb-8 md:pt-11 md:pb-10">
      {/* Logo + Name */}
      <Link
        href="/"
        aria-label="James Allchurch Home"
        className="flex items-center gap-5"
      >
        <Image
          src="/JAicon2.svg"
          alt="James Allchurch"
          width={56}
          height={56}
          priority
          className="h-12 w-12 shrink-0 object-contain md:h-14 md:w-14"
        />

        <span className="text-[26px] md:text-[34px] font-medium leading-none tracking-[-0.045em] text-[#111111]">
          James Allchurch
        </span>
      </Link>

      {/* Navigation */}
      <nav
        aria-label="Primary navigation"
        className="flex gap-10 md:gap-16 text-[26px] md:text-[34px] font-medium leading-none tracking-[-0.045em]"
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
