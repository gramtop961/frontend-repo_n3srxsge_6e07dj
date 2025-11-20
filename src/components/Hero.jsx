import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200/80 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Lucent — Website Design Agency
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Crisp, conversion‑focused websites for modern brands.
          </h1>
          <p className="mt-5 text-slate-300 max-w-xl">
            We craft fast, accessible, and beautiful web experiences that move metrics. From strategy to ship, our process is transparent and collaborative.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:opacity-90 transition">
              Start a Project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
