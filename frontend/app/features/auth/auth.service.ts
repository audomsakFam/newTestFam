import { apiRequest } from "@/app/lib/api-client";
import { ReqAuth, ReqRegister } from "./auth.type";

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

  async register(req: ReqRegister) {
    const res = await apiRequest("http://localhost:3000/users/register", {
      method: "POST",
      body: JSON.stringify(req),
      headers: {
        "Content-type": "application/json",
      },
    });

    return res;
  },
};
