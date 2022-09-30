import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import IntroductionWork from "./components/IntroductionWork";
import "./style/dist/style.css";

function App() {
  return (
    <main className="min-h-[200vh] bg-[#181818]">
      <Cursor />
      <Hero />
      <IntroductionWork />
    </main>
  );
}

export default App;
