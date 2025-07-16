import React, { useEffect, useState } from "react";

export default function Header({ module , mode }) {

  console.log(module);
  const [ButtonPosition,setButtonPosition] = useState("")
  
  useEffect(()=>{
    if (mode ==="DetailView") {
      setButtonPosition("Detail Page")
    }
    else if(mode === "EditView"){
      setButtonPosition("Edit Page")
    }
    else{
      setButtonPosition("Create")
    }
  },[])
  

  return (
    <div className="w-full max-w-xl mx-auto">
      <p className="text-gray-700 mb-4 text-lg font-semibold">
        Enter Address Details To AutoComplete
      </p>

      <div className="flex items-center mb-6 flex-wrap gap-3">
        <span className="text-gray-800 text-base font-medium">
          Current Module :
        </span>
        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {module}
        </span>
        <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold capitalize">
          {ButtonPosition}
        </span>
      </div>

      <hr className="mb-6 border-gray-300" />
    </div>
  );
}
