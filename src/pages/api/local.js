import { connectToDatabase } from "../../util/mongodb";
import { ObjectID } from "mongodb";
import md5 from "md5";

export default async function local(req, res) {
  const db = await connectToDatabase();
  const locales = await db.db.collection("locales");
  let locais = 0;

  const methods = {
    async GET() {
      res.setHeader("Content-Type", "application/json");
      locais = await locales.find({}).toArray();
      res.end(
        JSON.stringify({
          body: locais,
        })
      );
      res.statusCode = 200;
    },

    async POST() {
      req.body.chave = md5(req.body.chave);
      await locales.insertOne(req.body);

      res.writeHead(302, {
        Location: "/",
      });
      res.end();
    },

    async PUT() {
      res.setHeader("Content-Type", "application/json");
      locais = await locales.find({ $text: { $search: req.body.pesquisa } }).toArray();
      res.end(
        JSON.stringify({
          body: locais,
        })
      );
      res.statusCode = 200;
    },

    async DELETE() {
      res.setHeader("Content-Type", "application/json");
      const id = req.body._id;
      const chave = md5(req.body.chave);
      const local = await locales.findOne({ _id: new ObjectID(id) });

      if (local.chave == chave) {
        await locales.deleteOne({ _id: new ObjectID(id) });
      } else {
        res.statusCode = 401;
      }
      res.statusCode = 200;
      res.end();
    },
  };

  const requestedMethod = methods[req.method];
  if (requestedMethod != undefined) {
    await requestedMethod();
  } else {
    res.statusCode = 404;
  }
}
