import { apiRequest } from "@/app/lib/api-client";
import { ReqAuth } from "../types/auth.type";

export const authService = {
  async login(req: ReqAuth) {
    const res = await apiRequest("http://localhost:3000/auth/login", {
      method: "POST",
      body: JSON.stringify(req),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });

    return res;
  },

  async logout() {
    const res = await apiRequest("http://localhost:3000/auth/logout", {
      credentials: "include",
    });

    return res;
  },

 
};
