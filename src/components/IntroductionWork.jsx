import React, { useEffect, useState } from "react";
import work from "../json/work.json";

const IntroductionWork = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    caluclateAge();
  }, []);

  const caluclateAge = () => {
    const now = new Date();
    const age = new Date(2001, 9, 29);

    return convertmili(now - age);
  };

  const convertmili = (mSeconds) => {
    var checkYear = Math.floor(mSeconds / 31536000000);

    setAge(checkYear);
    return checkYear;
  };

  return (
    <>
      <section className="mt-16 max-w-[600px] mx-auto text-center text-[#81807f]">
        <h1 className="font-semibold text-3xl">Hello, I'm Nikica Raznatovic</h1>
        <p className="text-xl">I'm a {age} old Junior Frontend Developer from Montenegro.</p>

        <p>Here are a few technologies I’ve been working with recently:</p>

        <ul className="flex justify-center gap-12 text-lg mt-8 text-left">
          <div>
            <li className="list-item">Javascript (ES6+)</li>
            <li className="list-item">React</li>
            <li className="list-item">Node.Js</li>
          </div>
          <div>
            <li className="list-item">Typescript</li>
            <li className="list-item">Java</li>
          </div>
        </ul>
      </section>

      <section className="work max-w-[1020px] mx-auto mt-64 px-[20px]">
        <h2 className="text-3xl text-[#81807f] mb-12 font-semibold font-header">Some things I've built</h2>

        <div className="flex flex-col gap-y-24">
          {work.map((work, index) => (
            <div className="grid gap-3 grid-12 items-center text-white" key={index}>
              <div
                className={`aspect-video h-full transition-all ease-in-out p-2 duration-200 saturate-0 hover:saturate-100 hover:p-0 ${
                  index % 2 === 0 ? "grid-image-reverse" : "grid-image"
                }`}
              >
                <a href="#">
                  <img
                    src={work.image}
                    alt=""
                    className="w-full h-full object-cover pointer-events-none select-none"
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
                  <a href="#" className="hover:text-red-600">
                    {work.title}
                  </a>
                </h2>
                <div className="relative bg-red-600 rounded-md px-6 py-4 whitespace-normal shadow-lg">
                  {work.description}
                </div>

                <ul className="flex justify-end gap-6 mt-2 font-mono">
                  {work.technologies.map((technology, index) => {
                    <li key={index} className="text-md text-gray-400 font-semibold">
                      {technology}
                    </li>;
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default IntroductionWork;
