import type { NextApiRequest, NextApiResponse } from "next";

import placesManager from "@/database/placesManager";
import apiFactory from "@/utils/apiFactory";

const methods = {
  async GET(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Content-Type", "application/json");
    const place = await placesManager.getByID(String(req.query.id));

    res.statusCode = place ? 200 : 404;
    res.end(
      JSON.stringify({
        body: place,
      })
    );
  },
};

export default apiFactory(methods);
