import css from "./Country.module.scss";

function Country(props) {
  console.log(props);

  return (
    <article className={css.country}>
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
