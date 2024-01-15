import type { NextApiRequest, NextApiResponse } from "next";

import placesManager from "@/database/placesManager";
import apiFactory from "@/utils/apiFactory";

const methods = {
  async GET(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Content-Type", "application/json");
    const places = await placesManager.getAll();

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        body: places,
      }),
    );
  },

  async POST(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Content-Type", "application/json");
    const places = await placesManager.find(req.body.search);

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        body: places,
      }),
    );
  },
};

export default apiFactory(methods);
