/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
} from "react";
import { ResMe } from "../types/user.type";
import { userService } from "../services/user.service";
import { authService } from "../services/auth.service";

type UserContextType = {
  user: ResMe | null;
  setUser: React.Dispatch<React.SetStateAction<ResMe | null>>;
  loading: boolean;
  logout: () => Promise<void>;
  isLoggedIn: boolean;
  refreshUser: () => Promise<void>;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: function (_value: React.SetStateAction<ResMe | null>): void {
    throw new Error("Function not implemented.");
  },
  loading: false,
  logout: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  isLoggedIn: false,
  refreshUser: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  "use client";
  const [user, setUser] = useState<ResMe | null>(null);
  const [loading, setLoading] = useState(true);

  const CheckUser = async () => {
    try {
      const res = await userService.me();
      setUser(res);
    } catch (err) {
      console.error(err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  useEffect(() => {
    CheckUser();
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser,
      loading,
      logout,
      isLoggedIn: !!user,
      refreshUser: CheckUser,
    }),
    [user, loading]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
export const useUser = () => useContext(UserContext);
