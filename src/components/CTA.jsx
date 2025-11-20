export default function CTA() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_0%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_70%_100%,rgba(59,130,246,0.15),transparent_30%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold">Let’s build something brilliant</h2>
          <p className="mt-2 text-slate-300">Tell us about your goals, timeline, and budget. We’ll reply within 1 business day.</p>

          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <input className="rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-400 outline-none focus:border-white/20 sm:col-span-1" placeholder="Your name" />
            <input className="rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-400 outline-none focus:border-white/20 sm:col-span-1" placeholder="Email" type="email" />
            <input className="rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-400 outline-none focus:border-white/20 sm:col-span-2" placeholder="Company / Website" />
            <textarea className="rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-400 outline-none focus:border-white/20 sm:col-span-2" rows="4" placeholder="Tell us about your project" />
            <div className="sm:col-span-2">
              <button type="button" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:opacity-90 transition">Request Proposal</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
