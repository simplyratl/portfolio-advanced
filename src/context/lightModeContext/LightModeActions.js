export const lightMode = (mode) => ({
  type: "LIGHT",
  payload: mode,
});

export const darkMode = (mode) => ({
  type: "DARK",
  payload: mode,
});

export const toggleMode = () => ({
  type: "TOGGLE",
});
