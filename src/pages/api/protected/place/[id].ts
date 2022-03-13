import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import placesManager from "@/database/placesManager";
import apiFactory from "@/utils/apiFactory";

const methods = {
  async POST(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });
    if (session?.user?.email) {
      await placesManager.update(String(req.query.id), req.body.place, session.user.email);
      res.end();
    } else {
      throw Error("Unauthorized");
    }
  },

  async DELETE(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });
    if (session?.user?.email) {
      await placesManager.delete(String(req.query.id), session.user.email);
      res.end();

      await res.unstable_revalidate("/locais/" + String(req.query.id));
    } else {
      throw Error("Unauthorized");
    }
  },
};

export default apiFactory(methods);
