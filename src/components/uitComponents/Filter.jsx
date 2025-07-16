import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";

export default function Filter({ data }) {
  const [entity, setEntity] = useState("");

  useEffect(() => {
    setEntity(data.Entity);
  }, [data.Entity]);

  console.log(entity);

  return (
    <>
      {entity === "Contacts" && (
        <div className="flex justify-around my-2" >
          <Buttons text={"Mailings"} />
          <Buttons text={"Others"} />
        </div>
      )}
      {(entity === "Accounts" ||
        entity === "Quotes" ||
        entity === "Sales orders" ||
        entity === "Purchase orders") && (
        <div >
          <Buttons text={"Billing"} />
          <Buttons text={"Shipping"} />
        </div>
      )}
    </>
  );
}
