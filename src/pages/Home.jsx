import WhatWeDo from "../components/WhatWeDo";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div>
      <section className="h-[400px] bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
        Hero Section (Banner Image from Figma)
      </section>
      <WhatWeDo />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">Featured Properties</h2>
        {/* Map featured properties from API here */}
      </section>
      <Newsletter />
    </div>
  );
}
