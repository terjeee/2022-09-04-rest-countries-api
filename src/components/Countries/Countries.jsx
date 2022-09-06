import { useEffect, useState } from "react";

import Country from "./components/Country";

import css from "./Countries.module.scss";

function Countries() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <section className={css.countries}>
      <div className={css.container}>
        <div className={css.filter}>
          <input className={css.input} type="text" />
          <select className={css.select} name="filter-select" id="filter-select">
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europa">Europa</option>
            <option value="Oceania">Oceania</option>
            <option value="All">All Continents</option>
          </select>
        </div>
        <div className={css.list}>
          {countries &&
            countries.map((country) => (
              <Country
                key={country}
                name={country.name.common}
                flag={country.flags.png}
                population={country.population}
                capital={country.capital}
                region={country.region}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Countries;
