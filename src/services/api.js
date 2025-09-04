// src/services/api.js

// Named export ✅
export async function getProperties() {
  try {
    const res = await fetch(
      "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }

    return await res.json();
  } catch (err) {
    console.error("API Error:", err);
    return []; // fallback empty array so UI won't break
  }
}
