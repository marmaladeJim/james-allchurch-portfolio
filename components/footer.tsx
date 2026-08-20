import { EmailIcon, LinkedInIcon, VimeoIcon } from "@/components/icons";

const socialLinks = {
  email: "mailto:jimallchurch@gmail.com",
  linkedin: "https://www.linkedin.com/in/jamesallchurch/",
  vimeo: "https://vimeo.com/user13227551",
};

export function Footer() {
  return (
    <footer className="site-shell mt-10 border-t border-[#DEDDD8] py-7 text-center text-[#8A8A8A] md:mt-12 md:pb-11">
      <div className="mb-5 flex justify-center gap-7">
        <a href={socialLinks.email} aria-label="Email" className="transition-colors hover:text-[#111111]"><EmailIcon className="size-5" /></a>
        <a href={socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#111111]"><LinkedInIcon className="size-5" /></a>
        <a href={socialLinks.vimeo} aria-label="Vimeo" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#111111]"><VimeoIcon className="size-5" /></a>
      </div>
      <p className="text-[14px] md:text-[15px]">© 2026 James Allchurch</p>
    </footer>
  );
}
