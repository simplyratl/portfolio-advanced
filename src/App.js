import { useContext } from "react";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Work from "./components/Work";
import { LightModeContext } from "./context/lightModeContext/LightModeContext";
import "./style/dist/style.css";
import { useMenuStore } from "./utils/store";
import "./App.css";
import HamburgerMenu from "./components/Hamburger";
import HeaderMenu from "./components/HeaderMenu";
import { AnimatePresence } from "framer-motion";

function App() {
	const { lightMode } = useContext(LightModeContext);
	const { menuOpen } = useMenuStore();

	return (
		<div className="relative">
			<Cursor />
			<HamburgerMenu />

			<section className={`outer-container ${lightMode ? "light" : "dark"}`}>
				<main className={`background ${menuOpen ? "menu-open" : ""}`}>
					<div
						className={`${menuOpen ? "pointer-events-none select-none" : ""}`}
					>
						<Hero />
						<Introduction />
						<Work />
						<Contact />
					</div>
				</main>
			</section>

			<AnimatePresence>{menuOpen && <HeaderMenu />}</AnimatePresence>
		</div>
	);
}

export default App;
