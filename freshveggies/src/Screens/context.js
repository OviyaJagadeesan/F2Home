import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterContextProvider(props) {
  const [checkValue, setCheckValue] = useState("");

  const updateValue = (value) => {
    console.log("Value", value);
    setCheckValue({ value: value, checked: true });
  };

  return (
    <FilterContext.Provider value={{ checkValue, updateValue }}>
      {props.children}
    </FilterContext.Provider>
  );
}
