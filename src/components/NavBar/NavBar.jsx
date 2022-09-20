import { Link } from "react-router-dom";
import BtnChangeTheme from "../UI/BtnChangeTheme";

import css from "./NavBar.module.scss";

function NavBar() {
  return (
    <header className="theme__el">
      <div className={css.container}>
        <nav className={css.navbar}>
          <Link to="/">Countries</Link>
          <BtnChangeTheme />
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
