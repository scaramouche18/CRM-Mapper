import React, { useEffect, useRef } from "react";

export default function CountryAddressInput({
  countries,
  selectedCountry,
  setSelectedCountry,
  addressInput,
  setAddressInput,
}) {
  const addressRef = useRef(null);

  useEffect(() => {
    if (!window.google || !window.google.maps) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      addressRef.current,
      {
        types: ["address"],
        componentRestrictions: selectedCountry
          ? { country: selectedCountry.toLowerCase() }
          : {},
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      console.log("Selected Place:", place);

      setAddressInput(place.formatted_address || "");
    });

    return () => {
      window.google.maps.event.clearInstanceListeners(autocomplete);
    };
  }, [selectedCountry]);

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Country & Enter Location
      </label>
      <div className="flex gap-2">
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="w-1/3 border px-3 py-2 rounded"
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          ref={addressRef}
          value={addressInput}
          onChange={(e) => setAddressInput(e.target.value)}
          placeholder="Start typing address..."
          className="w-2/3 border px-3 py-2 rounded"
        />
      </div>
    </div>
  );
}
