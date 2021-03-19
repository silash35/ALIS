import type { NextApiRequest, NextApiResponse } from "next";

import locationsManager from "@/database/locationsManager";
import { IPlace } from "@/types/IPlace";

const place = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  let place: IPlace;
  const id = String(req.query.id);

  const methods = {
    async GET() {
      res.setHeader("Content-Type", "application/json");
      place = await locationsManager.getPlaceByID(id);

      res.statusCode = 200;
      res.end(
        JSON.stringify({
          body: place,
        })
      );
    },

    /* TODO: Modify place status
      async POST() {
        res.writeHead(302, {
          Location: "/",
        });
        res.end();
      },
    */

    async DELETE() {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = await locationsManager.deletePlace(id, req.body.key);

      res.end();
    },
  };

  const requestedMethod = methods[req.method];
  if (requestedMethod != undefined || id != undefined) {
    await requestedMethod();
  } else {
    res.statusCode = 404;
  }
};

export default place;
