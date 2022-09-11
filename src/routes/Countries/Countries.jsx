import { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

import Country from "./components/Country";

import css from "./Countries.module.scss";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [filterInput, setFilterInput] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

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

  const handleFilterInput = (event) => {
    setFilterInput(event.target.value.toLowerCase());
  };

  const handleFilterRegion = (event) => {
    setFilterRegion(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const filteredList = countries.filter(
      (country) =>
        country.region.toLowerCase().includes(filterRegion) &&
        country.name.common.toLowerCase().includes(filterInput)
    );

    setFilteredCountries(filteredList);
  }, [countries, filterInput, filterRegion]);

  return (
    <section className={css.countries}>
      <div className={css.container}>
        <div className={css.filter}>
          <form>
            <button>:)</button>
            <input className={css.input} onChange={handleFilterInput} type="text" />
          </form>
          <select
            className={css.select}
            onChange={handleFilterRegion}
            name="filter-select"
            id="filter-select"
          >
            <option value="">All Continents</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className={css.list}>
          {/* <InfiniteScroll
            dataLength={displayCountries.length}
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>The End.</b>
              </p>
            }
          > */}
          {filteredCountries.map((country, index) => (
            <Country
              key={index}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              capital={country.capital}
              region={country.region}
            />
          ))}
          {/* </InfiniteScroll> */}
        </div>
      </div>
    </section>
  );
}

export default Countries;
