import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import themeContext from "./context/themeContext";

import NavBar from "./components/NavBar/NavBar";
import Countries from "./routes/Countries/Countries";
import CountryDetails from "./routes/CountryDetails/CountryDetails";

function App() {
  const ctxTheme = useContext(themeContext);

  return (
    <div className="app" id={ctxTheme.theme}>
      <NavBar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/country/:countryId" element={<CountryDetails />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
