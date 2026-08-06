import Link from "next/link";

const navItems = [
  { href: "/reel", label: "Reel" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="site-shell flex items-center justify-between py-8 md:py-10">
      <Link
        href="/"
        className="text-[24px] md:text-[30px] font-bold tracking-[0.04em] leading-none text-[#111111] transition-opacity duration-300 hover:opacity-80"
      >
        James Allchurch
      </Link>

      <nav
        aria-label="Primary navigation"
        className="flex items-center gap-10 md:gap-16"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative text-[16px] md:text-[20px] font-semibold tracking-[0.05em] text-[#7E7E7E] transition-colors duration-300 hover:text-[#111111]"
          >
            {item.label}

            <span
              aria-hidden="true"
              className="absolute left-1/2 -bottom-1 h-px w-full -translate-x-1/2 scale-x-0 bg-[#111111] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
          </Link>
        ))}
      </nav>
    </header>
  );
}
