import React, { memo } from "react";
import gif from "../../assets/preloader/preloader.gif";
import { motion } from "framer-motion";

const Loading = () => {
	return (
		<motion.div
			initial={{ x: "0%" }}
			animate={{ x: "0%" }}
			exit={{ x: "-100%" }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			className="fixed top-0 left-0 w-[100vw] h-screen bg-black grid place-content-center z-[99999] overflow-hidden"
		>
			<img src={gif} alt="loading..." className="w-[120%]" />
		</motion.div>
	);
};

export default memo(Loading);
