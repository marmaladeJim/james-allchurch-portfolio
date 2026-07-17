export function Showreel() {
  return (
    <section aria-label="Showreel" className="mb-4 md:mb-5">
      <div className="relative aspect-video overflow-hidden bg-black md:aspect-[16/4.7]">
        <iframe
          className="absolute inset-0 size-full border-0"
          src="https://player.vimeo.com/video/425431968?title=0&byline=0&portrait=0&color=ffffff"
          title="James Allchurch Showreel"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          allowFullScreen
        />
      </div>
    </section>
  );
}
