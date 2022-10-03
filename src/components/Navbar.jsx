import React, { useContext } from "react";
import { LightModeContext } from "../context/lightModeContext/LightModeContext";
import { BsStars, BsSunFill } from "react-icons/bs";
import { GiSightDisabled } from "react-icons/gi";
import { toggleLightMode } from "../context/lightModeContext/calls";

const Navbar = ({ effects, enableEffects, disableEffects, handleDisableEffects }) => {
  const { dispatch } = useContext(LightModeContext);

  return (
    <aside className="absolute top-4 right-4 z-10">
      <div className="flex justify-center items-center gap-4">
        <div className="group relative">
          <button
            type="button"
            className={`bg-[var(--primary)] w-[32px] h-[32px] flex justify-center items-center rounded-full cursor-none primary-hover ${
              disableEffects && "primary-bg"
            }`}
            onClick={() => handleDisableEffects(!disableEffects)}
          >
            <GiSightDisabled color="white" size={24} />

            <span className="absolute text-white z-10 top-11 right-0 text-xs w-[140px] text-right opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 ease-in-out">
              Disable effects completely, useful when initial animation is slow. Disabled by default.
            </span>
          </button>
        </div>

        <div className="group relative">
          <button
            type="button"
            className={`w-[32px] h-[32px] flex justify-center items-center rounded-full cursor-none primary-hover ${
              effects && "primary-bg"
            }`}
            onClick={() => enableEffects(!effects)}
          >
            <BsStars color="white" size={24} />

            <span className="absolute text-white z-10 top-11 right-0 text-xs w-[140px] text-right opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 ease-in-out">
              Enable better effects for high-end pcs. Disabled by default.
            </span>
          </button>
        </div>

        <div className="group relative">
          <button
            type="button"
            className={`w-[32px] h-[32px] flex justify-center items-center rounded-full cursor-none primary-hover ${
              effects && "primary-bg"
            }`}
            onClick={() => toggleLightMode(dispatch)}
          >
            <BsSunFill color="white" size={24} />

            <span className="absolute text-white z-10 top-11 right-0 text-xs w-[140px] text-right opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 ease-in-out">
              Enable dark mode.
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
