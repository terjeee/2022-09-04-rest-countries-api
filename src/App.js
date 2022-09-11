import NavBar from "./components/NavBar/NavBar";
import Countries from "./routes/Countries/Countries";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Countries />
      </main>
    </div>
  );
}

export default App;
