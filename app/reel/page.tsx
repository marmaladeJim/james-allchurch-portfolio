export default function ReelPage() {
  return (
    <main className="site-shell pb-16 md:pb-24">
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src="https://player.vimeo.com/video/425431968?title=0&byline=0&portrait=0&color=ffffff"
          title="James Allchurch Showreel"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          allowFullScreen
        />
      </div>
    </main>
  );
}
