import React, { useEffect, useRef, useState } from "react";
import work from "../json/work.json";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

const IntroductionWork = () => {
	const [workCards, setWorkCards] = useState([]);
	const [itemsToShow, setItemsToShow] = useState(1);

	const showMoreRef = useRef(null);

	useEffect(() => {
		setWorkCards(work);
	}, []);

	return (
		<section
			className="work max-w-[1080px] mx-auto mt-64 px-[20px] overflow-hidden"
			id="projects"
		>
			<h2 className="text-3xl text-heading mb-12 font-semibold font-header text-header">
				Some things I've built
			</h2>

			<div className="flex flex-col gap-y-24 last:gap-y-12">
				{workCards.slice(0, itemsToShow).map((work, index) => (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.7 }}
						className="grid gap-2 grid-12 items-center text-white"
						key={index}
					>
						<div
							className={`w-full h-full transition-all ease-in-out scale-95 duration-200 saturate-0 hover:saturate-100 hover:scale-100 ${
								index % 2 === 0 ? "grid-image-reverse" : "grid-image"
							}`}
						>
							<a
								href={work.link}
								target="_blank"
								rel="noreferrer"
								className={`${work.worked_on && "pointer-events-none"}`}
							>
								<img
									src={work.image}
									alt={work.title}
									className="w-full h-full object-cover object-top pointer-events-none select-none"
								/>
							</a>
						</div>

						<div
							className={`relative ${
								index % 2 === 0
									? "grid-text-reverse text-left"
									: "grid-text text-right"
							}`}
						>
							<span className="text-md text-red-400 font-mono">
								{work.worked_on ? "Not relased yet" : "Featured Project"}
							</span>

							<h2 className="text-2xl font-semibold mb-6">
								<a
									href={work.link}
									target="_blank"
									rel="noreferrer"
									className={`white primary-text-hover ${
										work.worked_on && "pointer-events-none"
									}`}
								>
									{work.title}
								</a>
							</h2>
							<div
								className={`bubble ${
									index % 2 === 0 && "reverse"
								} relative primary-bg rounded-md px-6 py-4 whitespace-normal`}
							>
								{work.description}
							</div>

							<ul
								className={`flex ${
									index % 2 === 0 ? "justify-start" : "justify-end"
								} gap-6 mt-2 font-mono text-sm overflow-x-auto`}
							>
								{work.technologies.map((technology, index) => (
									<li key={index} className="text-md gray font-semibold">
										{technology}
									</li>
								))}
							</ul>
						</div>
					</motion.div>
				))}

				{itemsToShow >= work.length && (
					<a
						href="https://github.com/simplyratl?tab=repositories"
						className="text-color text-lg flex justify-center items-center gap-2 primary-text-hover"
						target="_blank"
						rel="noreferrer"
					>
						<span>More projects are on my github.</span>
						<BsGithub />
					</a>
				)}

				<div className="flex justify-center">
					<button
						type="button"
						className="bg-red-600 px-4 py-2 rounded-md text-white mb-4 scroll-my-6 cursor-none"
						onClick={() => {
							if (itemsToShow < work.length) setItemsToShow(work.length);
							else setItemsToShow(1);
						}}
						ref={showMoreRef}
					>
						{itemsToShow >= work.length ? "Show less" : "Show more"}
					</button>
				</div>
			</div>
		</section>
	);
};

export default IntroductionWork;
