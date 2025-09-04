export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex gap-4 my-6">
      <button
        className={`px-4 py-2 rounded ${filter === "sale" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setFilter("sale")}
      >
        For Sale
      </button>
      <button
        className={`px-4 py-2 rounded ${filter === "rent" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setFilter("rent")}
      >
        For Rent
      </button>
      <button
        className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
    </div>
  );
}
