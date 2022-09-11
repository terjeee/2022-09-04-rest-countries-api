import { createContext, useState } from "react";

const themeContext = createContext();

export function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </themeContext.Provider>
  );
}

export default themeContext;
