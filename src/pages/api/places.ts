import type { NextApiRequest, NextApiResponse } from "next";

import locationsManager from "@/database/locationsManager";
import { IPlace } from "@/types/IPlace";

const place = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  let places: IPlace[];

  const methods = {
    async GET() {
      res.setHeader("Content-Type", "application/json");
      places = await locationsManager.getAllPlaces();

      res.statusCode = 200;
      res.end(
        JSON.stringify({
          body: places,
        })
      );
    },

    async POST() {
      await locationsManager.insertPlace(req.body);

      res.writeHead(302, {
        Location: "/",
      });
      res.end();
    },

    async PUT() {
      res.setHeader("Content-Type", "application/json");
      places = await locationsManager.findPlaces(req.body.search);

      res.statusCode = 200;
      res.end(
        JSON.stringify({
          body: places,
        })
      );
    },

    async DELETE() {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = await locationsManager.deletePlace(req.body.id, req.body.key);

      res.end();
    },
  };

  const requestedMethod = methods[req.method];
  if (requestedMethod != undefined) {
    await requestedMethod();
  } else {
    res.statusCode = 404;
  }
};

export default place;
