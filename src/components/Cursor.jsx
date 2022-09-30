import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX - 5,
        y: e.clientY - 5,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 17,
      y: mousePos.y - 17,
    },
  };

  return (
    <div className="cursor" style={{ top: mousePos.y, left: mousePos.x }}>
      <div
        className="cursor-circle"
        variants={variants}
        animate="default"
        transition={{ ease: "easeOut", duration: 0.7 }}
      ></div>
    </div>
  );
};

export default Cursor;
