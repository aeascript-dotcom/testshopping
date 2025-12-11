"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const filters = {
  categories: ["Pendant Lights", "Chandeliers", "Wall Sconces", "Ceiling Lights", "Floor Lamps", "Table Lamps", "Track Lighting", "Outdoor Lighting"],
  priceRanges: [
    { label: "Under ฿500", value: "0-500" },
    { label: "฿500 - ฿1,000", value: "500-1000" },
    { label: "฿1,000 - ฿2,000", value: "1000-2000" },
    { label: "฿2,000 - ฿5,000", value: "2000-5000" },
    { label: "Over ฿5,000", value: "5000+" },
  ],
  styles: ["Modern", "Industrial", "Traditional", "Minimalist", "Vintage", "Contemporary"],
  rooms: ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Office", "Dining Room", "Outdoor"],
};

export default function ProductFilters() {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    styles: false,
    rooms: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>

      {/* Categories */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("categories")}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="font-semibold text-gray-900">Categories</h3>
          <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${expandedSections.categories ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.categories && (
          <div className="space-y-2">
            {filters.categories.map((category) => (
              <label key={category} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-factory-orange focus:ring-factory-orange" />
                <span className="text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="font-semibold text-gray-900">Price Range</h3>
          <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${expandedSections.price ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.price && (
          <div className="space-y-2">
            {filters.priceRanges.map((range) => (
              <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="price" className="border-gray-300 text-factory-orange focus:ring-factory-orange" />
                <span className="text-sm text-gray-700">{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Styles */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("styles")}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="font-semibold text-gray-900">Style</h3>
          <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${expandedSections.styles ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.styles && (
          <div className="space-y-2">
            {filters.styles.map((style) => (
              <label key={style} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-factory-orange focus:ring-factory-orange" />
                <span className="text-sm text-gray-700">{style}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rooms */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("rooms")}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="font-semibold text-gray-900">Room</h3>
          <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${expandedSections.rooms ? 'rotate-180' : ''}`} />
        </button>
        {expandedSections.rooms && (
          <div className="space-y-2">
            {filters.rooms.map((room) => (
              <label key={room} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-factory-orange focus:ring-factory-orange" />
                <span className="text-sm text-gray-700">{room}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Special Filters */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-semibold text-gray-900 mb-3">Special Offers</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-factory-orange focus:ring-factory-orange" />
            <span className="text-sm text-gray-700">Pool Available</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-factory-orange focus:ring-factory-orange" />
            <span className="text-sm text-gray-700">On Clearance</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-factory-orange focus:ring-factory-orange" />
            <span className="text-sm text-gray-700">New Arrivals</span>
          </label>
        </div>
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
        Clear All Filters
      </button>
    </div>
  );
}
