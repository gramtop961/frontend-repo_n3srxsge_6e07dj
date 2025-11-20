export default function Logos() {
  const logos = [
    'Acme', 'Vertex', 'Nimbus', 'Aurora', 'Pulse', 'Halo'
  ];
  return (
    <section className="bg-slate-950 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-6 opacity-70">
          {logos.map((name) => (
            <div key={name} className="text-center text-slate-300 text-sm tracking-wide uppercase">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
