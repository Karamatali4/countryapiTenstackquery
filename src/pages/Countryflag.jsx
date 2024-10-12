import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchCountry } from "../api/Api";
import { NavLink } from "react-router-dom";

function Countryflag() {
  const [input, setInput] = useState("");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["all"],
    queryFn: fetchCountry,
  });

  // Add conditional check to ensure `data` is not undefined
  const filteredData =
    data?.filter((country) =>
      country.name.toLowerCase().includes(input.toLowerCase())
    ) || [];

  // Map through filteredData if available
  const mcountrydata = filteredData.map((country) => (
    <div
      key={country.alpha3Code} // Use a unique identifier for key
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <NavLink to={`/countryind/${country.name}`}>
        <img
          className="rounded-t-lg"
          src={country.flag}
          width={250}
          alt="country name"
        />
        </NavLink>
    </div>
  ));

  // Display loading or error message if necessary
  if (isLoading) return <h1>Loading ...</h1>;
  if (isError) return <h1>Error: {error.message || "Something went wrong"}</h1>;

  return (
    <>
      <div className="container h-auto max-w-[77.5rem] mt-5 m-auto bg-slate-50 flex flex-col justify-center items-center">
        <div className="box1 mb-5">
          <input
            className="p-3 outline-none border-t-orange-950 bg-slate-950 rounded-lg w-[20rem] lg:w-[50rem] text-lime-50 me-5"
            type="search"
            name="country"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Name"
          />
          <span>{input}</span>
        </div>
        <div className="box2 flex justify-evenly items-center flex-wrap gap-5 mt-2">
          {isLoading ? <h1>Loading ...</h1> : mcountrydata}
        </div>
      </div>
    </>
  );
}

export default Countryflag;
