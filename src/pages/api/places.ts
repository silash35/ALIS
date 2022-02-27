import { Place } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

import placesManager from "@/database/placesManager";

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

  try {
    const requestedMethod = methods[req.method as TMethod];
    if (requestedMethod != undefined) {
      await requestedMethod();
    } else {
      throw "Invalid Method";
    }
  } catch (error) {
    res.statusCode = 404;
    res.end();
  }
};

export default places;
