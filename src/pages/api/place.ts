import { Place } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

import placesManager from "@/database/placesManager";

type TMethod = "GET" | "POST" | "POST" | "DELETE";

const place = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  let place: Place | undefined | null;
  const id = String(req.query.id);

  const methods = {
    async GET() {
      res.setHeader("Content-Type", "application/json");
      place = await placesManager.getByID(id);

      res.statusCode = place ? 200 : 404;
      res.end(
        JSON.stringify({
          body: place,
        })
      );
    },

    async POST() {
      res.statusCode = await placesManager.update(id, req.body.place, req.body.key);
      res.end();
    },

    async DELETE() {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = await placesManager.delete(id, req.body.key);

      res.end();
    },
  };

  const requestedMethod = methods[req.method as TMethod];
  if (requestedMethod != undefined || id != undefined) {
    await requestedMethod();
  } else {
    res.statusCode = 404;
  }
};

export default place;
