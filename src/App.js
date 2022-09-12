import { useContext } from "react";
import themeContext from "./context/themeContext";

import NavBar from "./components/NavBar/NavBar";
import Countries from "./routes/Countries/Countries";

function App() {
  const ctxTheme = useContext(themeContext);

  console.log(ctxTheme.theme);

  return (
    <div id={ctxTheme.theme}>
      <NavBar />
      <main>
        <Countries />
      </main>
    </div>
  );
}

export default App;
