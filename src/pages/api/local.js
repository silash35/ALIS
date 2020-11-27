import { connectToDatabase } from "../../util/mongodb";

export default async function local(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const db = await connectToDatabase();
  const listaDeLocais = await db.db.collection("listaDeLocais");

  switch (req.method) {
    case "GET":
      const locais = await listaDeLocais.find(req.body).toArray();
      res.end(
        JSON.stringify({
          body: locais,
          status: "ok",
        })
      );
      break;

    case "POST":
      await listaDeLocais.insertOne(req.body);
      res.end(JSON.stringify({ status: "ok" }));
      break;

    default:
      res.end(JSON.stringify({ status: "Operação não permitida" }));
      break;
  }
}
