import { lightMode, darkMode, toggleMode } from "./LightModeActions";

export const toggleLightMode = (dispatch) => {
  dispatch(toggleMode());
};
