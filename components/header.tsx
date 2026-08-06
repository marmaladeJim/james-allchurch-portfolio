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
        className="text-[24px] font-bold leading-none tracking-[0.035em] text-[#111111] md:text-[30px]"
      >
        James Allchurch
      </Link>

      <nav
        aria-label="Primary navigation"
        className="group relative py-1 text-[16px] font-semibold leading-none tracking-[0.05em] text-[#7E7E7E] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#111111] focus-visible:-translate-y-0.5 focus-visible:text-[#111111] md:text-[20px]"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative py-1 text-[16px] font-semibold leading-none tracking-[0.05em] text-[#7E7E7E] transition-colors duration-300 hover:text-[#111111] focus-visible:text-[#111111] md:text-[20px]"
          >
            <span className="relative z-10">{item.label}</span>

            <span
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-[#111111] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
          </Link>
        ))}
      </nav>
    </header>
  );
}
