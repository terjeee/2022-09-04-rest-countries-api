import { useContext } from "react";
import themeContext from "../../context/themeContext";

import { MdOutlineNightlightRound } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

import css from "./BtnChangeTheme.module.scss";

export default function BtnChangeTheme() {
  const ctxTheme = useContext(themeContext);

  const handleChangeTheme = () => {
    ctxTheme.toggleTheme();
  };

  return (
    <button className={css.btn__theme} onClick={handleChangeTheme} id="theme__el">
      {ctxTheme.theme === "light" ? <MdOutlineNightlightRound /> : <WiDaySunny />}
    </button>
  );
}
