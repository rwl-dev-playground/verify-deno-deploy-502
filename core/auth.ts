import { getCookies } from "std/http/cookie.ts";
import "std/dotenv/load.ts";

export const isAuth = (req: Request) => {
  const cookie = getCookies(req.headers);
  return cookie.password === Deno.env.get("PASSWORD");
};
