import { useContext } from "react";
import themeContext from "../../context/themeContext";

import Select from "react-select";

const light = {
  control: (theme) => ({
    ...theme,
    width: "auto",
    padding: "5px 5px",
    backgroundColor: "hsl(0, 0%, 100%)",
    fontSize: "15px",
    border: "none",
  }),
  option: (theme) => ({
    ...theme,
    backgroundColor: "hsl(0, 0%, 100%)",
    fontSize: "15px",
    outlineStyle: "none",
  }),
};

const dark = {
  control: (theme) => ({
    ...theme,
    width: "auto",
    padding: "5px 5px",
    backgroundColor: "hsl(209, 23%, 22%)",
    color: "#FFF",
    fontSize: "15px",
    border: "none",
  }),
  option: (theme) => ({
    ...theme,
    backgroundColor: "hsl(209, 23%, 22%)",
    color: "#FFF",
    fontSize: "15px",
    border: "none",
  }),
};

export default function SelectMenu(props) {
  const ctx = useContext(themeContext);

  return (
    <Select
      styles={ctx.theme === "light" ? light : dark}
      onChange={props.onChange}
      placeholder={props.placeholder}
      isSearchable={props.isSearchable}
      options={props.options}
    />
  );
}
