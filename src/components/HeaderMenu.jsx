import React from "react";
import { Pivot as Hamburger } from "hamburger-react";
import { useMenuStore } from "../utils/store";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HeaderMenu = () => {
	const nav = ["Home", "About", "Projects", "Contact"];

	return (
		<motion.div
			initial={{ opacity: 0, x: 60 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 60 }}
			transition={{ duration: 0.4, exit: { duration: 1 }, ease: "easeInOut" }}
			className="fixed top-0 left-0 w-[200px] h-screen z-[1]"
		>
			<ul className="h-full pt-20 flex flex-col gap-2 pl-8">
				{nav.map((item, index) => (
					<li
						key={index}
						className="text-white text-2xl font-bold hover:text-[#d33333]"
					>
						<Link
							to={item.toLowerCase()}
							smooth={true}
							offset={-40}
							duration={500}
							delay={80}
							spy={true}
							isDynamic
							activeStyle={{ color: "#d33333" }}
						>
							{item}
						</Link>
					</li>
				))}
			</ul>
		</motion.div>
	);
};

export default HeaderMenu;
