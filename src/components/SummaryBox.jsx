import React from "react";
import MapPreview from "./MapPreview";

export default function SummaryBox({ summary, formatOptions }) {
  if (!summary) return null;

  return (
    <div className="bg-gray-50 p-4 rounded border border-gray-200">
      <h3 className="text-base font-semibold text-gray-800 mb-4">
        Summary
      </h3>
      <div className="flex justify-between gap-6">
        {/* Summary List */}
        <ul className="text-gray-700 space-y-1 text-sm flex-1">
          {formatOptions.street && (
            <li>
              <span className="font-medium inline-block w-20">Street:</span>
              {summary.street}
            </li>
          )}
          {formatOptions.city && (
            <li>
              <span className="font-medium inline-block w-20">City:</span>
              {summary.city}
            </li>
          )}
          {formatOptions.province && (
            <li>
              <span className="font-medium inline-block w-20">Province:</span>
              {summary.province}
            </li>
          )}
          <li>
            <span className="font-medium inline-block w-20">Code:</span>
            {summary.code}
          </li>
          <li>
            <span className="font-medium inline-block w-20">Country:</span>
            {summary.country}
          </li>
        </ul>

        {/* Map Preview */}
        {summary.lat && summary.lng && (
          <MapPreview lat={summary.lat} lng={summary.lng} />
        )}
      </div>
    </div>
  );
}
