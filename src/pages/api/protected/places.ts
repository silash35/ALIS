import { Place } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import placesManager from "@/database/placesManager";
import apiFactory from "@/utils/apiFactory";

const methods = {
  async GET(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Content-Type", "application/json");
    const session = await getSession({ req });
    let places: Place[];
    if (session?.user?.email) {
      places = await placesManager.findByUser(session.user.email);
    } else {
      throw Error("Unauthorized");
    }

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        body: places,
      })
    );
  },

  async POST(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });
    if (session) {
      const place = req.body;
      place.userMail = session.user?.email;
      await placesManager.insert(place);
    } else {
      throw Error("Unauthorized");
    }

    res.writeHead(302, {
      Location: "/",
    });
    res.end();
  },
};

export default apiFactory(methods);
