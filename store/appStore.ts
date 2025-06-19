import { create } from "zustand";

interface App{
    isLoading: boolean;
}
interface AppStore{
    app: App;
    setAppLoading: (isLoading: boolean) => void;
}

const initialAppStore: App = {
    isLoading: false,
};

export const useAppStore = create<AppStore>((set) => ({
    app: initialAppStore,
    setAppLoading: (isLoading: boolean) => set((state => ({
        app: {...state.app,
        isLoading: isLoading}
    }))),
}));    