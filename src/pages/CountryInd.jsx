import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchCountryInd } from "../api/Api";
import { useParams } from "react-router-dom";

function CountryInd() {
  const { name } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["country", name],
    queryFn: () => fetchCountryInd(name),
  });

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Error: {error.message || "Something went wrong"}</p>;

  const country = data[0]; // The API returns an array with the country object inside.

  return (
    <div className="container flex flex-col justify-center items-center h-auto m-5 mb-10">
      <div className="max-w-sm bg-slate-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center flex flex-col">
        <img
          className="rounded-t-lg"
          src={country.flag}
          alt={country.name}
          width={250}
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
            {country.name}
          </h5>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">
            <span className="font-bold">Capital:</span> {country.capital}
          </p>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">
            <span className="font-bold">Population:</span> {country.population}
          </p>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">
            <span className="font-bold">Region:</span> {country.region}
          </p>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">
            <span className="font-bold">Timezones:</span>{" "}
            {country.timezones.join(", ")}
          </p>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">
            <span className="font-bold">Currencies:</span>{" "}
            {country.currencies.map((currency) => currency.code).join(", ")}
          </p>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">
            <span className="font-bold">Languages:</span>{" "}
            {country.languages.map((language) => language.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryInd;
