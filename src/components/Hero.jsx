import { Link } from "react-router-dom";


export default function Hero() {
return (
<section className="bg-[url('https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center">
<div className="bg-black/50">
<div className="max-w-6xl mx-auto px-4 py-24 text-white">
<h1 className="text-4xl md:text-6xl font-bold leading-tight">Find Your Dream Home</h1>
<p className="mt-3 text-lg max-w-xl">Explore curated listings for sale and rent across top cities—tailored to your lifestyle.</p>
<div className="mt-6 flex gap-3">
<Link to="/listings" className="px-5 py-3 bg-brand-500 rounded-md font-medium">Browse Listings</Link>
<a href="#newsletter" className="px-5 py-3 bg-white/10 rounded-md border border-white/30">Get Updates</a>
</div>
</div>
</div>
</section>
);
}