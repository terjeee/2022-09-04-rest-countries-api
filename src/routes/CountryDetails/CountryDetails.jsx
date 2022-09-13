import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function CountryDetails() {
  const { countryId: id } = useParams();
  const [country, setCountry] = useState(null);
  console.log(country);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountry(...data);
      });
  }, [id]);

  return (
    <aside>
      <button>Back</button>
      {country && (
        <div>
          <div>
            <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
          </div>
          <article>
            <h3>{country.name.common}</h3>
            <div>
              <div>
                <p>
                  <span>Native Name: </span>
                  {Object.values(country.name.nativeName).map((el) => el.official)}
                </p>
                <p>
                  <span>Population: </span>
                  {country.population}
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
                  <span>Top Level Domain: </span>
                  {country.tld}
                </p>
                <p>
                  <span>Currencies: </span>
                  {Object.keys(country.currencies).map((el) => el)}
                </p>
                <p>
                  <span>Languages: </span>
                  {Object.values(country.languages).map((el) => el)}
                </p>
              </div>
            </div>
            <div>
              {country.borders.map((country, index) => (
                <Link to={`/country/${country}`} key={index}>
                  {country}
                </Link>
              ))}
            </div>
          </article>
        </div>
      )}
    </aside>
  );
}
