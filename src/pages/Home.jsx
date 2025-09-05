import { motion } from "framer-motion";
import WhatWeDo from "../components/WhatWeDo";
import Newsletter from "../components/Newsletter";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate()
  const properties = [
    {
      id: 1,
      title: "Luxury Beach Villa",
      location: "Miami, USA",
      price: "$1,250,000",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Dubai, UAE",
      price: "$850,000",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Cozy Family House",
      location: "London, UK",
      price: "$620,000",
      img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[4000ms] ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Find Your <span className="text-blue-400">Perfect Home</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Explore hand-picked premium properties tailored to your lifestyle.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(59,130,246,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold shadow-lg"
              onClick={() => navigate("/signup")}   // ✅ sahi route daalna
            >
              Get Started
            </motion.button>
            <motion.button
              onClick={() => navigate("/listings")}   // ✅ sahi route daalna

              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(255,255,255,0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-white/40 backdrop-blur-sm bg-white/10 text-white font-semibold"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* What We Do */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <WhatWeDo />
      </motion.div>

      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-12 text-gray-800 text-center"
        >
          ✨ Featured Properties
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl group relative"
            >
              {/* Property Image */}
              <div className="relative">
                <img
                  src={property.img}
                  alt={property.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badge */}
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
                  Featured
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="font-semibold text-xl">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>
                <p className="mt-2 font-bold text-blue-600">{property.price}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <button className="px-5 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Newsletter />
      </motion.div>
    </div>
  );
}
