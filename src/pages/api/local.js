import { connectToDatabase } from "../../util/mongodb";
import { ObjectID } from "mongodb";

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
      let a = await listaDeLocais.deleteOne({ _id: new ObjectID(id) });
      res.end(JSON.stringify({ status: "ok" }));
    },
  };

  const requestedMethod = methods[req.method];
  if (requestedMethod != undefined) {
    await requestedMethod();
  } else {
    res.end(JSON.stringify({ status: "Operação não permitida" }));
  }
}
