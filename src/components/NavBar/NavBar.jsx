import css from "./NavBar.module.scss";

function NavBar() {
  const handleChangeTheme = () => {
    console.log("Change Theme");
  };

  return (
    <header>
      <nav className={css.navbar}>
        <h3>Countries</h3>
        <button className={css.btn__theme} onClick={handleChangeTheme}>
          Light/Dark
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
