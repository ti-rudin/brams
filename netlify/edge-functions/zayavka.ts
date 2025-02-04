import type { Context } from "@netlify/edge-functions";

export default async (req: Request, { cookies, geo }: Context) => {

    const url = new URL(req.url);

    const res = await fetch(
        `https://api.telegram.org/bot7785397434:AAHRjTW5NrtosD9kBT6JDs-ew4X5xh9Y2Sc/sendMessage?chat_id=-1002326974408&text=Имя: ${url.searchParams.get("name")} \n Телефон: ${url.searchParams.get("tel")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
 
    return new Response(JSON.stringify(res), {
      headers: { "content-type": "text/html" }
    });
  };
export const config = { path: "/zayavka" };