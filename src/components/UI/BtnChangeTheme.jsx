import { useContext, useEffect } from "react";
import themeContext from "../../context/themeContext";

import { MdOutlineNightlightRound } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

import css from "./BtnChangeTheme.module.scss";

export default function BtnChangeTheme() {
  const ctxTheme = useContext(themeContext);
  console.log(localStorage);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const appTheme = ctxTheme.theme;

    if (!localTheme) return;
    if (localTheme === appTheme) return;

    ctxTheme.toggleTheme();
  }, []); // eslint-disable-line

  const handleChangeTheme = () => {
    const localTheme = localStorage.getItem("theme");

    ctxTheme.toggleTheme();

    if (!localTheme) return localStorage.setItem("theme", "light");

    localTheme === "light"
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  };

  return (
    <button className={css.btn__theme} onClick={handleChangeTheme} id="theme__el">
      {ctxTheme.theme === "light" ? <MdOutlineNightlightRound /> : <WiDaySunny />}
    </button>
  );
}
