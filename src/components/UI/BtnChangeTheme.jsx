import { useContext, useEffect } from "react";
import themeContext from "../../context/themeContext";

import { MdOutlineNightlightRound } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

import css from "./BtnChangeTheme.module.scss";

export default function BtnChangeTheme() {
  const ctxTheme = useContext(themeContext);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const appTheme = ctxTheme.theme;

    if (!localTheme) return localStorage.setItem("theme", "light");
    if (localTheme === appTheme) return;

    ctxTheme.toggleTheme();
  }, []); // eslint-disable-line

  const handleChangeTheme = () => {
    const localTheme = localStorage.getItem("theme");

    localTheme === "light"
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");

    ctxTheme.toggleTheme();
  };

  return (
    <button
      className={`${css.btn__theme} theme__el`}
      onClick={handleChangeTheme}
      aria-label="change-theme"
    >
      {ctxTheme.theme === "light" ? <MdOutlineNightlightRound /> : <WiDaySunny />}
    </button>
  );
}
