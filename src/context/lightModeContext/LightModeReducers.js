const LightModeReducers = (state, action) => {
  switch (action.type) {
    case "LIGHT": {
      return {
        lightMode: true,
      };
    }
    case "DARK": {
      return {
        lightMode: false,
      };
    }
    case "TOGGLE": {
      console.log("radi");

      return {
        lightMode: !state.lightMode,
      };
    }
    default:
      return state;
  }
};

export default LightModeReducers;
