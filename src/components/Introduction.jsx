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
    <section className="mt-16 max-w-[600px] mx-auto text-center px-4">
      <h1 className="font-semibold text-3xl text-heading">Hello, I'm Nikica Raznatovic</h1>
      <p className="text-xl mb-4 text-heading-2">
        I'm a {age} year old Junior Frontend Developer from Montenegro. I am currently studying at FIT, University
        of Mediteran in Podgorica.
      </p>
      <p className="text-color">Here are a few technologies I’ve been working with recently:</p>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-color flex justify-center gap-12 text-md mt-8 text-left"
      >
        <div>
          <li className="list-item">Javascript (ES6+)</li>
          <li className="list-item">React</li>
          <li className="list-item">Node.Js</li>
        </div>
        <div>
          <li className="list-item">Typescript</li>
          <li className="list-item">Java</li>
          <li className="list-item">SQL/Postgres</li>
        </div>
      </motion.ul>
    </section>
  );
};

export default Introduction;
