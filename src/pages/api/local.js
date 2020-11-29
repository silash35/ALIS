import { connectToDatabase } from "../../util/mongodb";
import { ObjectID } from "mongodb";
import md5 from "md5";

export default async function local(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const db = await connectToDatabase();
  const listaDeLocais = await db.db.collection("listaDeLocais");
  let locais = 0;

  const methods = {
    async GET() {
      locais = await listaDeLocais.find({}).toArray();
      res.end(
        JSON.stringify({
          body: locais
        })
      );
    },

    async POST() {
      req.body.chave = md5(req.body.chave);

      await listaDeLocais.insertOne(req.body);
      res.statusCode = 201;
    },

    async PUT() {
      locais = await listaDeLocais.find(req.body).toArray();
      res.end(
        JSON.stringify({
          body: locais
        })
      );
    },

    async DELETE() {
      const id = req.body._id;
      const chave = md5(req.body.chave);
      const local = await listaDeLocais.findOne({ _id: new ObjectID(id) });

      if (local.chave == chave) {
        await listaDeLocais.deleteOne({ _id: new ObjectID(id) });
      } else {
        res.statusCode = 401;
      }
    },
  };

  const requestedMethod = methods[req.method];
  if (requestedMethod != undefined) {
    await requestedMethod();
  } else {
    res.statusCode = 404;
  }
  res.send('ok')
}
