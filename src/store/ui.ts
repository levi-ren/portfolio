import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UIStore {
  sideNavOpen: boolean;
  toggleSideNav: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useUIStore = create<UIStore>()(
  devtools((set) => ({
    sideNavOpen: true,
    toggleSideNav: () => set((state) => ({ sideNavOpen: !state.sideNavOpen })),
    darkMode: true,
    toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  }))
);

export default useUIStore;
