import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UIStore {
  sideNavOpen: boolean;
  toggleSideNav: () => void;
}

const useUIStore = create<UIStore>()(
  devtools((set) => ({
    sideNavOpen: true,
    toggleSideNav: () => set((state) => ({ sideNavOpen: !state.sideNavOpen })),
  }))
);

export default useUIStore;
