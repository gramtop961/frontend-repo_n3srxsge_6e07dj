export default function Work() {
  const projects = [
    {
      title: "Atlas Analytics",
      tag: "SaaS Website",
      img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "Nova Solar",
      tag: "Marketing Site",
      img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "Pulse Health",
      tag: "Product Launch",
      img: "https://images.unsplash.com/photo-1581093458791-9d09b179f8f4?q=80&w=1600&auto=format&fit=crop"
    },
  ];

  return (
    <section id="work" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold">Selected Work</h2>
          <a href="#contact" className="text-sm text-slate-300 hover:text-white transition">Become our next case study →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href="#contact" className="group relative overflow-hidden rounded-2xl border border-white/10">
              <img src={p.img} alt="" className="h-64 w-full object-cover opacity-90 transition group-hover:scale-105 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs text-slate-300">{p.tag}</span>
                <h3 className="text-white font-medium">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
