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
    <section>
      <div className={css.container}>
        <Button onClick={handleNavigateHome}>Back</Button>
        {country && (
          <div className={css.details}>
            <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
            <article className={css.info}>
              <h2>{country.name.common}</h2>
              <div className={css.text}>
                <div>
                  <p>
                    <span>Native Name: </span>
                    {Object.values(country.name.nativeName)[0].common}
                  </p>
                  <p>
                    <span>Population: </span>
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <span>Region: </span>
                    {country.region}
                  </p>
                  <p>
                    <span>Sub Region: </span>
                    {country.subregion}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {country.capital}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Top-Level Domain: </span>
                    {country.tld.map((tld, index) => (index ? " " : "") + tld)}
                  </p>
                  <p>
                    <span>Currencies: </span>
                    {Object.values(country.currencies).map(
                      (cur, index) =>
                        (index ? ", " : "") + `${cur.name} (${cur.symbol.toUpperCase()})`
                    )}
                  </p>
                  <p>
                    <span>Languages: </span>
                    {Object.values(country.languages).map(
                      (lang, index) => (index ? ", " : "") + lang
                    )}
                  </p>
                </div>
              </div>
              <div>
                <p>
                  <span>Border Countries:</span>
                </p>
                {country?.borders &&
                  country.borders.map((el, index) => (
                    <Link to={`/country/${el.toLowerCase()}`} key={index}>
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
