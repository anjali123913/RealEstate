export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-gray-600">{property.city}, {property.state}</p>
        <p className="text-sm text-gray-500 mt-1">Owner: {property.ownerName}</p>
        <p className="text-sm text-gray-500">Contact: {property.contactNumber}</p>
      </div>
    </div>
  );
}
