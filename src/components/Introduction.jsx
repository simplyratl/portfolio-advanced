import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Introduction = () => {
	const [age, setAge] = useState(0);

	useEffect(() => {
		const caluclateAge = () => {
			const now = new Date();
			const age = new Date(2001, 9, 29);

			return convertmili(now - age);
		};

		caluclateAge();
	}, []);

	const convertmili = (mSeconds) => {
		var checkYear = Math.floor(mSeconds / 31536000000);

		setAge(checkYear);
		return checkYear;
	};

	return (
		<section
			className="mt-16 max-w-[800px] mx-auto text-center px-4"
			id="about"
		>
			<h1 className="font-black text-[72px] text-heading leading-[72px]">
				Frontend React Developer
			</h1>
			<p className="text-xl mb-4 text-heading-2 mt-4 px-5">
				As a Frontend React Developer, I have a passion for modern and
				responsive design, and I am equally skilled in the functionality aspect
				of web programming. With a specialization in React, I am proficient in
				creating dynamic, interactive interfaces that are both visually
				appealing and user-friendly. My knowledge of development tools like
				Tailwind and SCSS helps me write clean and optimized code that delivers
				seamless performance. As a team player, I enjoy collaborating with
				others to produce high-quality web applications that meet our clients'
				needs.
			</p>
			<p className="text-color">
				Here are a few technologies I’ve been working with recently:
			</p>

			<motion.ul
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4 }}
				className="text-color flex justify-center gap-12 text-md mt-8 text-left"
			>
				<div>
					<li className="list-item">Javascript/Typescript (ES6+)</li>
					<li className="list-item">React</li>
					<li className="list-item">Angular</li>
				</div>
				<div>
					<li className="list-item">React Native</li>
					<li className="list-item">Java</li>
					<li className="list-item">SQL</li>
				</div>
			</motion.ul>
		</section>
	);
};

export default Introduction;
