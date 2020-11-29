import { connectToDatabase } from "../../util/mongodb";
import { ObjectID } from "mongodb";
import md5 from "md5";
import { Repeat } from "@material-ui/icons";

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
          body: locais,
          status: "ok",
        })
      );
    },

    async POST() {
      req.body.chave = md5(req.body.chave);

      await listaDeLocais.insertOne(req.body);
      res.end(JSON.stringify({ status: "ok" }));
    },

    async PUT() {
      locais = await listaDeLocais.find(req.body).toArray();
      res.end(
        JSON.stringify({
          body: locais,
          status: "ok",
        })
      );
    },

    async DELETE() {
      let id = req.body._id;
      let chave = md5(req.body.chave);
      let local = await listaDeLocais.findOne({ _id: new ObjectID(id) });

      if (local.chave == chave) {
        await listaDeLocais.deleteOne({ _id: new ObjectID(id) });
        res.end(JSON.stringify({ status: "ok" }));
      } else {
        res.end(JSON.stringify({ status: "falhou" }));
      }
    },
  };

  const requestedMethod = methods[req.method];
  if (requestedMethod != undefined) {
    await requestedMethod();
  } else {
    res.end(JSON.stringify({ status: "Operação não permitida" }));
  }
}
