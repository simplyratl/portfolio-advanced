import { create } from "zustand";

export const useMenuStore = create((set) => ({
	menuOpen: false,
	menuToggle: () =>
		set((state) => ({
			menuOpen: !state.menuOpen,
		})),
}));
