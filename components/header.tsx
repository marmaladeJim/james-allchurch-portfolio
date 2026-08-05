import Link from "next/link";

const navItems = [
  { href: "/reel", label: "Reel" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="site-shell mb-10 flex items-end justify-between pt-9 md:mb-14 md:pt-11">
      <div>
        <Link
          href="/"
          className="block text-[26px] font-medium leading-none tracking-[-0.045em] md:text-[34px]"
        >
          James Allchurch
        </Link>

        <p className="mt-2 text-[22px] leading-none tracking-[-0.035em] text-[#8A8A8A] md:text-[29px]">
          Freelance Motion Designer
        </p>
      </div>

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
