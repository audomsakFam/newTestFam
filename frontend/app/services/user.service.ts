import { apiRequest } from "../lib/api-client";
import { ReqRegister, ResMe } from "../types/user.type";

export const userService = {
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

  async me() {
    const res = await apiRequest<ResMe>(`http://localhost:3000/users/me`, {
      credentials: "include",
    });

    return res;
  },
};
