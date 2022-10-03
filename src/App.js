import { useContext } from "react";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Work from "./components/Work";
import { LightModeContext } from "./context/lightModeContext/LightModeContext";
import "./style/dist/style.css";

function App() {
  const { lightMode } = useContext(LightModeContext);

  return (
    <main className={`min-h-[200vh] background ${lightMode ? "light" : "dark"}`}>
      <Cursor />
      <Hero />
      <Introduction />
      <Work />
      <Contact />
    </main>
  );
}

export default App;
