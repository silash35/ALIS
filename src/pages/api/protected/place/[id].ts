import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";

import placesManager from "@/database/placesManager";
import apiFactory from "@/utils/apiFactory";

const methods = {
  async POST(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions);
    if (session?.user?.email) {
      await placesManager.update(String(req.query.id), req.body.place, session.user.email);
      res.statusCode = 200;
      res.end();
    } else {
      throw Error("Unauthorized");
    }
  },

  async DELETE(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions);
    if (session?.user?.email) {
      await placesManager.delete(String(req.query.id), session.user.email);
      res.statusCode = 200;
      res.end();

      await res.revalidate("/locais/" + String(req.query.id));
    } else {
      throw Error("Unauthorized");
    }
  },
};

export default apiFactory(methods);
