import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Work from "./components/Work";
import "./style/dist/style.css";

function App() {
  return (
    <main className="min-h-[200vh] bg-[#181818]">
      <Cursor />
      <Hero />
      <Introduction />
      <Work />
      <Contact />
    </main>
  );
}

export default App;
