import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import "./style/dist/style.css";

function App() {
  return (
    <main className="min-h-[200vh] bg-[#181818]">
      <Cursor />
      <Hero />
    </main>
  );
}

export default App;
