import { Place } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

import placesManager from "@/database/placesManager";
import revalidate from "@/utils/revalidate";

type TMethod = "GET" | "POST" | "POST";

const places = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  let places: Place[] | undefined | null;

  const methods = {
    async GET() {
      res.setHeader("Content-Type", "application/json");
      places = await placesManager.getAll();

      res.statusCode = 200;
      res.end(
        JSON.stringify({
          body: places,
        })
      );
    },

    async POST() {
      await placesManager.insert(req.body);
      await revalidate(res);

      res.writeHead(302, {
        Location: "/",
      });
      res.end();
    },

    async PUT() {
      res.setHeader("Content-Type", "application/json");
      places = await placesManager.find(req.body.search);

      res.statusCode = 200;
      res.end(
        JSON.stringify({
          body: places,
        })
      );
    },
  };

  const requestedMethod = methods[req.method as TMethod];
  if (requestedMethod != undefined) {
    await requestedMethod();
  } else {
    res.statusCode = 404;
  }
};

export default places;
