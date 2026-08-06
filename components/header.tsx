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
      <Link
        href="/"
        aria-label="James Allchurch Home"
        className="flex items-center gap-5"
      >
        <Image
          src="/icon.svg"
          alt=""
          width={52}
          height={52}
          priority
          className="h-12 w-12 shrink-0 md:h-14 md:w-14"
        />

        <span className="text-[26px] md:text-[34px] font-medium leading-none tracking-[-0.045em]">
          James Allchurch
        </span>
      </Link>

      <nav
        aria-label="Primary navigation"
        className="flex gap-8 md:gap-12 text-[15px] md:text-[17px]"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[#8A8A8A] transition-colors duration-200 hover:text-[#111111]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
