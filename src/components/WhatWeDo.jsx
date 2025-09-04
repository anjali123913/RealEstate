const items = [
  { title: "Buy Homes", desc: "Handpicked properties with verified details." },
  { title: "Rent Faster", desc: "Zero hassle rentals with flexible terms." },
  { title: "Neighborhood Intel", desc: "Insights on schools, transit, and safety." },
  { title: "Expert Guidance", desc: "We help you shortlist and negotiate." },
];

export default function WhatWeDo() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center">What We Do</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
