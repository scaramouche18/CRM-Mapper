import React, { useState,useEffect } from "react";
import Header from "./components/Header";
import CountryAddressInput from "./components/CountryAddressInput";
import FormattingOptions from "./components/FormattingOptions";
import MapAddressButton from "./components/MapAddressButton";
import SummaryBox from "./components/SummaryBox";
import countries from "./data/countries";
import AutoComplete from "./components/AutoComplete";

function App({data}) {


    const [apiKey,setApiKey] = useState(null) //ref

  useEffect(() => {
    ZOHO.CRM.API.getOrgVariable("testcrm44__API").then(function (data) {
        setApiKey(data.Success.Content)
    })
  }, [])
  console.log(data.ButtonPosition);
  

  

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <Header module={data.Entity} mode={data.ButtonPosition} />

        <AutoComplete apiKey={apiKey}/>

      </div>
    </div>
  );
}

export default App;
