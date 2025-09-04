export default function Footer() {
return (
<footer className="border-t mt-16">
<div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
<div>
<div className="font-bold text-lg mb-2">EstatePro</div>
<p className="text-slate-600">Find your next home with curated properties for sale & rent.</p>
</div>
<div>
<div className="font-semibold mb-2">Company</div>
<ul className="space-y-1 text-slate-600">
<li>About</li>
<li>Careers</li>
<li>Contact</li>
</ul>
</div>
<div>
<div className="font-semibold mb-2">Legal</div>
<ul className="space-y-1 text-slate-600">
<li>Privacy</li>
<li>Terms</li>
</ul>
</div>
</div>
<div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} EstatePro</div>
</footer>
);
}