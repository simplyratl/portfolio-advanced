import { useContext, useEffect, useState } from "react";
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
import Loading from "./components/Loading/Loading";

function App() {
	const { lightMode } = useContext(LightModeContext);
	const { menuOpen } = useMenuStore();
	const [preload, setPreload] = useState(true);
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		if (!preload) {
			return;
		}

		let timeout;

		window.addEventListener("load", () => {
			console.log("sve se ucitalo");
			setShowContent(true);
			timeout = setTimeout(() => setPreload(false), 4000);
		});

		return () => {
			clearTimeout(timeout);
		};
	}, [preload]);

	useEffect(() => {
		if (preload) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "auto";
	}, [preload]);

	return (
		<>
			<AnimatePresence>{preload && <Loading />}</AnimatePresence>

			{showContent && (
				<div className="relative">
					<Cursor />
					<HamburgerMenu />

					<section
						className={`outer-container ${lightMode ? "light" : "dark"}`}
					>
						<main className={`background ${menuOpen ? "menu-open" : ""}`}>
							<div
								className={`${
									menuOpen ? "pointer-events-none select-none" : ""
								}`}
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
			)}
		</>
	);
}

export default App;
