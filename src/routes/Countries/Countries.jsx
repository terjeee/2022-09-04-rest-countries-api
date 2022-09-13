import { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

import { BiSearchAlt2 } from "react-icons/bi";
import SelectMenu from "../../components/NavBar/UI/SelectMenu";
import Country from "./components/Country";

import css from "./Countries.module.scss";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [filterInput, setFilterInput] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  // fetch countries onMount
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
    setFilterRegion(event.value);
  };

  // apply filter to filteredCountries
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
          <form id="theme__el">
            <button className={css.button} id="theme__el" disabled>
              <BiSearchAlt2 />
            </button>
            <input
              className={css.input}
              onChange={handleFilterInput}
              type="text"
              placeholder="Search"
              id="theme__el"
            />
          </form>
          <SelectMenu
            onChange={handleFilterRegion}
            placeholder="Filter by Region"
            isSearchable={false}
            options={[
              { value: "", label: "All" },
              { value: "africa", label: "Africa" },
              { value: "americas", label: "Americas" },
              { value: "asia", label: "Asia" },
              { value: "europe", label: "Europe" },
              { value: "oceania", label: "Oceania" },
            ]}
          />
          {/* <select onChange={handleFilterRegion} name="filter-select" id="theme__el">
            <option value="">All Continents</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select> */}
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
              cca3={country.cca3}
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
