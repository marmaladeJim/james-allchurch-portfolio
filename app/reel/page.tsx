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
{/* Credits */}
<section className="py-10 md:py-14">
  <h2 className="mb-6 text-[18px] font-semibold tracking-[-0.01em] text-[#111111]">
    Credits
  </h2>

  <div className="text-[15px] leading-relaxed md:text-[17px]">
    {[
      ["00:00", "Introduction", "Design + Animation"],
      ["00:03", "Our Quantum Future", "Design + Animation"],
      ["00:09", "Adidas Predator", "Compositing + Animation"],
      ["00:13", "Our Quantum Future", "Design + Animation"],
      ["00:14", "Pitch", "Design + Animation"],
      ["00:16", "Blender/AE Experiment", "Design + Animation"],
      ["00:16", "PWC", "Design + Animation"],
      ["00:19", "Our Quantum Future", "Design + Animation"],
      ["00:20", "PWC", "Design + Animation"],
      ["00:21", "Adidas City Run", "Animation"],
      ["00:25", "Adidas x JD Sports", "Design + Animation"],
      ["00:28", "National Centre for Nuclear Robotics", "Design + Animation"],
      ["00:30", "Dell PowerFlex", "Animation"],
      ["00:31", "Pitch", "Design + Animation"],
      ["00:32", "Selfridges x Liam Gallagher", "Design + Animation"],
      ["00:35", "Bravado x Stormzy", "Design + Animation"],
      ["00:36", "Sky Q", "Animation"],
      ["00:38", "Personal Project", "Design + Animation"],
      ["00:40", "Our Quantum Future", "Design + Animation"],
      ["00:43", "MD Group", "Design + Animation"],
      ["00:44", "Tellermate", "Design + Animation"],
      ["00:47", "Adidas London Guide", "Compositing"],
      ["00:48", "Bain", "Design + Animation"],
      ["00:50", "Personal Project", "Design + Animation"],
      ["00:54", "Outro", "Design + Animation"],
    ].map(([time, project, role]) => (
      <div
        key={`${time}-${project}`}
        className="grid grid-cols-[55px_1fr] gap-3 border-t border-[#DEDDD8] py-2.5 md:grid-cols-[70px_1fr_auto] md:gap-6"
      >
        <span className="text-[#8A8A8A]">{time}</span>

        <span className="text-[#333333]">{project}</span>

        <span className="col-start-2 text-[#8A8A8A] md:col-start-auto">
          {role}
        </span>
      </div>
    ))}
  </div>
</section>
