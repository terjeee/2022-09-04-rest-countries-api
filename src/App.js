import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import themeContext from "./context/themeContext";

import NavBar from "./components/NavBar/NavBar";
import Countries from "./routes/Countries/Countries";
import CountryDetails from "./routes/CountryDetails/CountryDetails";

function App() {
  const ctxTheme = useContext(themeContext);

  return (
    <BrowserRouter>
      <div className="app" id={ctxTheme.theme}>
        <NavBar />
        <main>
          <Routes>
            <Route path="/2022-09-04-rest-countries-api/" element={<Countries />} />
            <Route
              path="/2022-09-04-rest-countries-api/country/:countryId"
              element={<CountryDetails />}
            />
            <Route path="*" element={<Navigate to="/2022-09-04-rest-countries-api/" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
