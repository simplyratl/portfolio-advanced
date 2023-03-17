import React, { useContext } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Pivot as Hamburger } from "hamburger-react";
import { useMenuStore } from "../utils/store";
import { LightModeContext } from "../context/lightModeContext/LightModeContext";

const HamburgerMenu = () => {
	const { lightMode } = useContext(LightModeContext);
	const { menuOpen, menuToggle } = useMenuStore();

	return (
		<div className="fixed top-4 left-8 w-fit z-50" onClick={menuToggle}>
			<Hamburger
				rounded
				label="Menu"
				size={48}
				color={lightMode ? "#a8a6a5" : "#57595a"}
			/>
			<p className="text-white text-4xl">{menuOpen}</p>
		</div>
	);
};

export default HamburgerMenu;
