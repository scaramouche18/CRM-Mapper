import React from "react";

export default function MapAddressButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded mb-8 transition-colors duration-300"
    >
      Map Street Address
    </button>
  );
}
