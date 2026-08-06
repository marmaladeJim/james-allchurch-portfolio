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
        className="text-[26px] md:text-[34px] font-bold leading-none tracking-[-0.045em] text-[#111111]"
      >
        James Allchurch
      </Link>

      <nav
        aria-label="Primary navigation"
        className="flex gap-10 md:gap-16"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[26px] md:text-[34px] font-bold leading-none tracking-[-0.045em] text-[#8A8A8A] transition-colors duration-200 hover:text-[#111111]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
