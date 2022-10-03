import React, { useEffect, useRef, useState } from "react";
import work from "../json/work.json";
import { AnimatePresence, motion } from "framer-motion";

const IntroductionWork = () => {
  const [workCards, setWorkCards] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(1);

  const showMoreRef = useRef(null);

  useEffect(() => {
    setWorkCards(work);

    const showMore = () => {
      showMoreRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    };

    showMore();
  }, [itemsToShow]);

  return (
    <>
      <section className="work max-w-[1020px] mx-auto mt-64 px-[20px] overflow-hidden">
        <h2 className="text-3xl text-[#81807f] mb-12 font-semibold font-header">Some things I've built</h2>

        <div className="flex flex-col gap-y-24 last:gap-y-12">
          {workCards.slice(0, itemsToShow).map((work, index) => (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7 }}
                className="grid gap-3 grid-12 items-center text-white"
                key={index}
              >
                <div
                  className={`w-full transition-all ease-in-out scale-95 duration-200 saturate-0 hover:saturate-100 hover:scale-100 ${
                    index % 2 === 0 ? "grid-image-reverse" : "grid-image"
                  }`}
                >
                  <a href={work.link} target="_blank" rel="noreferrer">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover object-top pointer-events-none select-none"
                    />
                  </a>
                </div>

                <div
                  className={`relative ${
                    index % 2 === 0 ? "grid-text-reverse text-left" : "grid-text text-right"
                  }`}
                >
                  <span className="text-sm text-red-400 font-mono">Featured Project</span>
                  <h2 className="text-2xl font-semibold mb-6">
                    <a href={work.link} target="_blank" rel="noreferrer" className="hover:text-red-600">
                      {work.title}
                    </a>
                  </h2>
                  <div
                    className={`bubble ${
                      index % 2 === 0 && "reverse"
                    } relative bg-red-600 rounded-md px-6 py-4 whitespace-normal shadow-lg`}
                  >
                    {work.description}
                  </div>

                  <ul
                    className={`flex ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    } gap-6 mt-2 font-mono text-sm overflow-x-auto`}
                  >
                    {work.technologies.map((technology, index) => (
                      <li key={index} className="text-md text-gray-400 font-semibold">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          ))}

          <div className="flex justify-center">
            <button
              type="button"
              className="bg-red-600 px-4 py-2 rounded-md text-white mb-4 scroll-my-6 cursor-none"
              onClick={() => {
                if (itemsToShow < work.length) setItemsToShow(itemsToShow + 1);
                else setItemsToShow(1);
              }}
              ref={showMoreRef}
            >
              {itemsToShow >= work.length ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroductionWork;
