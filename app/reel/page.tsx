export default function ReelPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <h1 className="mb-10 text-4xl font-medium tracking-tight">
        Showreel
      </h1>

      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src="https://player.vimeo.com/video/425431968?title=0&byline=0&portrait=0&color=ffffff"
          title="James Allchurch Showreel"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  );
}
