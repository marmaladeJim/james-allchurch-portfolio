export function Showreel() {
  return (
    <section aria-label="Showreel" className="mb-4">
      <div className="relative w-full aspect-video overflow-hidden bg-black">
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src="https://player.vimeo.com/video/425431968?title=0&byline=0&portrait=0&color=ffffff"
          title="James Allchurch Showreel"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          allowFullScreen
        />
      </div>
    </section>
  );
}
