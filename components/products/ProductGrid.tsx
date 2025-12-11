"use client";

import ProductCard from "./ProductCard";

// Mock products data
const products = [
  {
    id: 1,
    name: "Modern Pendant Light - Industrial Style",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop",
    retailPrice: 1590,
    contractorPrice: 890,
    factoryPrice: 990,
    category: "Pendant Lights",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    hasPool: true,
    poolPrice: 890,
  },
  {
    id: 2,
    name: "Crystal Chandelier 6-Light",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&h=500&fit=crop",
    retailPrice: 4590,
    contractorPrice: 2690,
    factoryPrice: 2990,
    category: "Chandeliers",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    hasPool: true,
    poolPrice: 2690,
  },
  {
    id: 3,
    name: "LED Track Lighting System",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=500&fit=crop",
    retailPrice: 2490,
    contractorPrice: 1490,
    factoryPrice: 1690,
    category: "Track Lighting",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    hasPool: true,
    poolPrice: 1490,
  },
  {
    id: 4,
    name: "Outdoor Wall Sconce - Set of 2",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=500&fit=crop",
    retailPrice: 1290,
    contractorPrice: 690,
    factoryPrice: 790,
    category: "Outdoor Lighting",
    rating: 4.6,
    reviews: 203,
    inStock: true,
    hasPool: false,
  },
  {
    id: 5,
    name: "Smart LED Ceiling Light",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    retailPrice: 3290,
    contractorPrice: 1890,
    factoryPrice: 2090,
    category: "Ceiling Lights",
    rating: 4.8,
    reviews: 167,
    inStock: true,
    hasPool: false,
  },
  {
    id: 6,
    name: "Vintage Edison Bulb Pendant",
    image: "https://images.unsplash.com/photo-1550785085-a6d5dd86c25f?w=500&h=500&fit=crop",
    retailPrice: 1890,
    contractorPrice: 990,
    factoryPrice: 1190,
    category: "Pendant Lights",
    rating: 4.9,
    reviews: 234,
    inStock: true,
    hasPool: false,
    onClearance: true,
    clearancePrice: 890,
  },
  {
    id: 7,
    name: "Industrial Floor Lamp",
    image: "https://images.unsplash.com/photo-1543198126-a8ad0a37d7e8?w=500&h=500&fit=crop",
    retailPrice: 3290,
    contractorPrice: 1790,
    factoryPrice: 1990,
    category: "Floor Lamps",
    rating: 4.7,
    reviews: 98,
    inStock: true,
    hasPool: false,
  },
  {
    id: 8,
    name: "Minimalist Table Lamp",
    image: "https://images.unsplash.com/photo-1507126416529-b29f82e4b6c9?w=500&h=500&fit=crop",
    retailPrice: 990,
    contractorPrice: 490,
    factoryPrice: 590,
    category: "Table Lamps",
    rating: 4.5,
    reviews: 145,
    inStock: true,
    hasPool: false,
  },
];

export default function ProductGrid() {
  return (
    <div>
      {/* Sort and View Options */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{products.length}</span> products
        </p>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-factory-orange focus:border-transparent">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Highest Rated</option>
          <option>Newest</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-12">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
          Previous
        </button>
        <button className="px-4 py-2 bg-factory-orange text-white rounded-lg">1</button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
  );
}
