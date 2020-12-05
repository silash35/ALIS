import { connectToDatabase } from "../../util/mongodb";
import { ObjectID } from "mongodb";
import md5 from "md5";

export default async function local(req, res) {
  const db = await connectToDatabase();
  const listaDeLocais = await db.db.collection("listaDeLocais");
  let locais = 0;

  const methods = {
    async GET() {
      res.setHeader("Content-Type", "application/json");
      locais = await listaDeLocais.find({}).toArray();
      res.end(
        JSON.stringify({
          body: locais,
        })
      );
      res.statusCode = 200;
    },

    async POST() {
      req.body.chave = md5(req.body.chave);
      await listaDeLocais.insertOne(req.body);

      res.writeHead(302, {
        Location: "/",
      });
      res.end();
    },

    async PUT() {
      res.setHeader("Content-Type", "application/json");
      locais = await listaDeLocais.find({ $text: { $search: req.body.pesquisa } }).toArray();
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
      const local = await listaDeLocais.findOne({ _id: new ObjectID(id) });

      if (local.chave == chave) {
        await listaDeLocais.deleteOne({ _id: new ObjectID(id) });
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
