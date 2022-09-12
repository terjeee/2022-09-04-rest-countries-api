import { useContext } from "react";
import themeContext from "../../context/themeContext";

import { MdOutlineNightlightRound } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

import css from "./NavBar.module.scss";

function NavBar() {
  const ctxTheme = useContext(themeContext);

  const handleChangeTheme = () => {
    ctxTheme.toggleTheme();
  };

  return (
    <header id="theme__el">
      <div className={css.container}>
        <nav className={css.navbar}>
          <h3>Countries</h3>
          <button className={css.btn__theme} onClick={handleChangeTheme} id="theme__el">
            {ctxTheme.theme === "light" ? <MdOutlineNightlightRound /> : <WiDaySunny />}
            {ctxTheme.theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
