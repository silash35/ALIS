import { connectToDatabase } from "../../util/mongodb";

export default async function local(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  console.log(req);

  const novo = {
    nome: req.body.nome,
    endereco: "ghsfdgdsfgsdg",
    descricao: "dfgdsfgsfgsdgsdfgfsdgsdfg",
  };

  if (req.method === 'POST') {
    const db = await connectToDatabase();
    const listaDeLocais = await db.db.collection("listaDeLocais");
    await listaDeLocais.insertOne(novo);

    res.end(JSON.stringify({ status: "ok" }));
  } else {
    res.end(JSON.stringify({ status: "falhou" }));
  }
}
