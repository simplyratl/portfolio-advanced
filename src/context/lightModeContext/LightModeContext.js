import { createContext, useReducer } from "react";
import LightModeReducers from "./LightModeReducers";

const INITIAL_STATE = {
  lightMode: false,
};

export const LightModeContext = createContext(INITIAL_STATE);

export const LightModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LightModeReducers, INITIAL_STATE);

  return (
    <LightModeContext.Provider value={{ lightMode: state.lightMode, dispatch }}>
      {children}
    </LightModeContext.Provider>
  );
};
