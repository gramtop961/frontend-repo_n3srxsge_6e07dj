import { Rocket, Layout, Smartphone, LineChart } from "lucide-react";

export default function Services() {
  const items = [
    {
      icon: <Layout className="h-5 w-5" />, 
      title: "Web Design",
      desc: "Elegant, user‑centered interfaces for marketing sites, SaaS, and ecommerce."
    },
    {
      icon: <Smartphone className="h-5 w-5" />, 
      title: "Webflow & No‑Code",
      desc: "Production builds in Webflow and modern no‑code stacks, launched fast."
    },
    {
      icon: <Rocket className="h-5 w-5" />, 
      title: "Front‑end Engineering",
      desc: "Pixel‑perfect builds in React with world‑class performance and a11y."
    },
    {
      icon: <LineChart className="h-5 w-5" />, 
      title: "CRO & SEO",
      desc: "Landing pages that convert, with analytics, experiments, and technical SEO."
    },
  ];

  return (
    <section id="services" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold">Services</h2>
          <p className="text-slate-400 text-sm max-w-md">We blend design craft with engineering rigor to deliver outcomes. Choose the engagement model that fits your team and timeline.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 hover:border-white/20 transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                {item.icon}
              </div>
              <h3 className="text-white font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
