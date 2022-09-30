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
    <section className="mt-16">
      <h1>Hello, I'm Nikica Raznatovic</h1>

      <p>I'm a {age} old Junior Frontend Developer from Montenegro.</p>
    </section>
  );
};

export default IntroductionWork;
