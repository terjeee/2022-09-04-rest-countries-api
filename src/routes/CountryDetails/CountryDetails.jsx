import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import css from "./CountryDetails.module.scss";

export default function CountryDetails() {
  const { countryId: id } = useParams();
  const navigateRR = useNavigate();
  const [country, setCountry] = useState(null);
  console.log(country?.borders);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountry(...data);
      });
  }, [id]);

  const handleNavigateHome = () => {
    navigateRR("/");
  };

  return (
    <section className={css.country__details}>
      <div className={css.container}>
        <Button onClick={handleNavigateHome}>Back</Button>
        {country && (
          <div className={css.details}>
            <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
            <article className={css.info}>
              <h2>{country.name.common}</h2>
              <div className={css.text}>
                <ul>
                  <li>
                    <span>Native Name: </span>
                    {Object.values(country.name.nativeName)[0].common}
                  </li>
                  <li>
                    <span>Population: </span>
                    {country.population.toLocaleString()}
                  </li>
                  <li>
                    <span>Region: </span>
                    {country.region}
                  </li>
                  <li>
                    <span>Sub Region: </span>
                    {country.subregion}
                  </li>
                  <li>
                    <span>Capital: </span>
                    {country.capital}
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>Top-Level Domain: </span>
                    {country.tld.map((tld, index) => (index ? " " : "") + tld)}
                  </li>
                  <li>
                    <span>Currencies: </span>
                    {Object.values(country.currencies).map(
                      (cur, index) =>
                        (index ? ", " : "") + `${cur.name} (${cur.symbol.toUpperCase()})`
                    )}
                  </li>
                  <li>
                    <span>Languages: </span>
                    {Object.values(country.languages).map(
                      (lang, index) => (index ? ", " : "") + lang
                    )}
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <span>Border Countries:</span>
                </p>
                {country?.borders &&
                  country.borders.map((el, index) => (
                    <Link
                      to={`/2022-09-04-rest-countries-api/country/${el.toLowerCase()}`}
                      key={index}
                    >
                      <Button>{el}</Button>
                    </Link>
                  ))}
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
