import React from 'react'
import { useState } from 'react';
import CountryAddressInput from './CountryAddressInput';
import FormattingOptions from './FormattingOptions';
import MapAddressButton from './MapAddressButton';
import SummaryBox from './SummaryBox';
import countries from '../data/countries';

export default function AutoComplete({apiKey}) {

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
      lat: 47.7177,
      lng: -122.1656
      
    });
  };
{/* geometry.location.lat()
geometry.location.lng()
 */}

  return (
    <>
       <CountryAddressInput
          countries={countries}
          apiKey={apiKey}
          selectedCountry={formState.selectedCountry}
          setSelectedCountry={(value) =>
            handleFormChange("selectedCountry", value)
          }
          addressInput={formState.addressInput}
          setAddressInput={(value) =>
            handleFormChange("addressInput", value)
          }
        />

        <FormattingOptions
          formatOptions={formatOptions}
          toggleFormatOption={toggleFormatOption}
        />

        <MapAddressButton onClick={handleMapAddress} />

        <SummaryBox summary={summary} formatOptions={formatOptions} />
    </>
  ) 
}
