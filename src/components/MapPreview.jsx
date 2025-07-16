import React, { useState } from "react";

export default function MapPreview({ lat, lng }) {
  const [isOpen, setIsOpen] = useState(false);

  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&output=embed`;

  return (
    <>
      {/* Small preview */}
      <div
        className="w-40 h-28 border border-gray-300 rounded cursor-pointer overflow-hidden hover:shadow-lg transition"
        onClick={() => setIsOpen(true)}
      >
        <iframe
          title="Map Preview"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-3xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">
                Map Preview
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-800 text-xl"
              >
                &times;
              </button>
            </div>
            <iframe
              title="Expanded Map"
              src={mapSrc}
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
