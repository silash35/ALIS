import type { NextApiRequest, NextApiResponse } from "next";

type TMethod = "GET" | "POST" | "PUT" | "DELETE";

interface Methods {
  GET?(req: NextApiRequest, res: NextApiResponse): Promise<void>;
  POST?(req: NextApiRequest, res: NextApiResponse): Promise<void>;
  PUT?(req: NextApiRequest, res: NextApiResponse): Promise<void>;
  DELETE?(req: NextApiRequest, res: NextApiResponse): Promise<void>;
}

export default function apiFactory(methods: Methods) {
  return async function API(req: NextApiRequest, res: NextApiResponse) {
    try {
      const requestedMethod = methods[req.method as TMethod];
      if (requestedMethod != undefined) {
        await requestedMethod(req, res);
      } else {
        throw Error("Method Not Allowed");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        switch (error.message) {
          case "Not Found":
            res.statusCode = 404;
            break;

          case "Unauthorized":
            res.statusCode = 401;
            break;

          case "Method Not Allowed":
            res.statusCode = 405;
            break;

          default:
            res.statusCode = 500;
            break;
        }
      } else {
        res.statusCode = 500;
      }
      res.end(JSON.stringify({ error }));
    }
  };
}
