import { useEffect, useState } from "react";
import { getProperties } from "../services/api";
import PropertyCard from "../components/PropertyCard";
import FilterBar from "../components/FilterBar";
import Loader from "../components/Loader";

export default function Listings() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getProperties();
      setProperties(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filtered = filter === "all"
    ? properties
    : properties.filter((p) => p.cardinalDirection.toLowerCase() === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <FilterBar filter={filter} setFilter={setFilter} />
      {loading ? (
        <Loader />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      )}
    </div>
  );
}
