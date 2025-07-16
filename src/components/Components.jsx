import React, { useState } from "react";

import CountryAddressInput from "./CountryAddressInput";
import FormattingOptions from "./FormattingOptions";
import SummaryBox from "./SummaryBox";
import MapAddressButton from "./MapAddressButton";
import countries from "../data/countries";


export default function MainWidget() {
  const [formState, setFormState] = useState({
    selectedCountry: "",
    addressInput: "",
  });

  const [formatOptions, setFormatOptions] = useState({
    street: false,
    city: false,
    province: false,
  });

  const [summary, setSummary] = useState(null);

  const toggleFormatOption = (key) => {
    setFormatOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleFormChange = (key, value) => {
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleMapAddress = () => {
    setSummary({
      street: "13159, 132nd Avenue Northeast",
      city: "Kirkland",
      province: "WA",
      code: "98034",
      country:
        countries.find((c) => c.code === formState.selectedCountry)?.name ||
        "",
    });
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Country Select */}
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Select Country:</label>
        <select
          value={formState.selectedCountry}
          onChange={(e) =>
            handleFormChange("selectedCountry", e.target.value)
          }
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a country</option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Address Input */}
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">Enter Address:</label>
        <input
          type="text"
          placeholder="Start typing address..."
          value={formState.addressInput}
          onChange={(e) =>
            handleFormChange("addressInput", e.target.value)
          }
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Formatting Options */}
      <div className="flex flex-col space-y-2">
        <span className="text-gray-700 font-medium">Formatting Options:</span>
        <div className="flex gap-2 flex-wrap">
          {["street", "city", "province"].map((key) => (
            <button
              key={key}
              onClick={() => toggleFormatOption(key)}
              className={`px-4 py-2 rounded-full border ${
                formatOptions[key]
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
            >
              {`Select ${key.charAt(0).toUpperCase() + key.slice(1)}`}
            </button>
          ))}
        </div>
      </div>

      {/* Map Button */}
      <div className="flex justify-center">
        <button
          onClick={handleMapAddress}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition"
        >
          Map Street Address
        </button>
      </div>

      {/* Summary */}
      {summary && (
        <div className="border border-gray-200 bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-semibold mb-3">Summary</h3>
          <ul className="text-gray-800 space-y-1">
            <li><strong>Street:</strong> {summary.street}</li>
            <li><strong>City:</strong> {summary.city}</li>
            <li><strong>Province:</strong> {summary.province}</li>
            <li><strong>Code:</strong> {summary.code}</li>
            <li><strong>Country:</strong> {summary.country}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
