import { useNavigate } from "react-router-dom";

import css from "./Country.module.scss";

function Country(props) {
  const navigateRR = useNavigate();

  const handleNavigate = () => {
    const country = props.cca3.toLowerCase();
    navigateRR(`/country/${country}`);
  };

  return (
    <article className={css.country} id="theme__el" onClick={handleNavigate}>
      <img src={props.flag} alt="flag" />
      <div className={css.text}>
        <h3>{props.name}</h3>
        <p>
          <span>Population:</span> {props.population.toLocaleString("en-US")}
        </p>
        <p>
          <span>Region:</span> {props.region}
        </p>
        <p>
          <span>Capital:</span> {props.capital}
        </p>
      </div>
    </article>
  );
}

export default Country;
