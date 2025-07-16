import React from "react";

const OPTIONS = [
  { key: "street", label: "Select Street", activeColor: "bg-blue-600", borderColor: "border-blue-600" },
  { key: "city", label: "Select City", activeColor: "bg-green-600", borderColor: "border-green-600" },
  { key: "province", label: "Select Province", activeColor: "bg-purple-600", borderColor: "border-purple-600" },
];

export default function FormattingOptions({ formatOptions, toggleFormatOption }) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 mb-2 text-sm font-semibold">
        Formatting Options
      </label>

      <div className="flex flex-wrap gap-3">
        {OPTIONS.map((option) => {
          const isActive = formatOptions[option.key];
          return (
            <button
              key={option.key}
              onClick={() => toggleFormatOption(option.key)}
              className={`px-4 py-2 rounded border text-sm transition-colors duration-300
                ${isActive 
                  ? `${option.activeColor} text-white ${option.borderColor}`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300"
                }
              `}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
