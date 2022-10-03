import React from "react";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="max-w-[1020px] px-[24px] m-auto text-[#81807f] text-center">
      <h2 className="font-semibold font-header text-3xl mt-32">Contact me</h2>
      <p className="mt-3 text-lg">
        Feel free to contact me about any question, freelance or job opportunities!
      </p>

      <button className="mt-12 border-2 border-red-600 px-6 py-3 rounded-md text-white mb-4 cursor-none hover:bg-red-600">
        <a href="mailto:nikicaraznatovic123@gmail.com">Email me :)</a>
      </button>

      <div className="mt-8 pb-10">
        <a href="https://github.com/simplyratl/portfolio-advanced" target="_blank">
          <BsGithub className="inline-block relative -top-[2px]" size={18} />
          <span className="inline-block ml-2">Source Code</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;