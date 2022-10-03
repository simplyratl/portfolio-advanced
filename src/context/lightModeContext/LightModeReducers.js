const LightModeReducers = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return {
        lightMode: !state.lightMode,
      };
    }
    default:
      return state;
  }
};

export default LightModeReducers;
