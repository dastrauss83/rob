import { useContext } from "react";
import { createContext } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: (e: any) => {},
});

export const useUserContext = () => useContext(UserContext);
