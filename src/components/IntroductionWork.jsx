import React, { useEffect, useState } from "react";

const IntroductionWork = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    caluclateAge();
  }, []);

  const caluclateAge = () => {
    const now = new Date();
    const age = new Date(2001, 9, 29);

    console.log(now, age);

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
      </section>

      <section>
        <h2>Most recent work</h2>
      </section>
    </>
  );
};

export default IntroductionWork;
