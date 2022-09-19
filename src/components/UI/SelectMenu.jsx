import { useContext } from "react";
import themeContext from "../../context/themeContext";

import Select from "react-select";
import css from "./SelectMenu.module.scss";

export default function SelectMenu(props) {
  const ctx = useContext(themeContext);

  const styles = {
    control: (base, state) => ({
      ...base,
      padding: "5px 5px",
      backgroundColor: ctx.theme === "light" ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)",
      border: "none",
      boxShadow: "none",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "hsl(0, 0%, 52%)",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: ctx.theme === "light" ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)",
      color: "hsl(0, 0%, 52%)",
      cursor: "pointer",
    }),
    option: (base) => ({ ...base, cursor: "pointer", color: "hsl(0, 0%, 52%)" }),
  };

  return (
    <Select
      className={css.select__container}
      styles={styles}
      onChange={props.onChange}
      placeholder={props.placeholder}
      isSearchable={props.isSearchable}
      options={props.options}
    />
  );
}
