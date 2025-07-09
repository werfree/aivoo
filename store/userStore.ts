import { USER_ROLES } from "@/constant/constant";
import { create } from "zustand";

interface User{
    firstName: string;
    lastName: string;
    email: string;
    role: USER_ROLES|undefined;
}
interface UserStore{
    user: User;
    setUser: (user: User) => void;
}

const initialUserStore: User = {
    firstName: "",
    lastName: "",
    email: "",
    role:undefined ,
};

export const useUserStore = create<UserStore>((set) => ({
    user: initialUserStore,
    setUser: (user: User) => set((state => ({
        user: {...state.user,
            ...user}
    }))),
}));    