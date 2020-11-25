import { connectToDatabase } from "../../util/mongodb";

export default async function local(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const novo = {
    nome: req.nome,
    endereco: "round",
    descricao: "San Marzano tomatoes mozzarella di bufala cheese",
  };

  if (req.method == "post") {
    const db = await connectToDatabase();
    const listaDeLocais = await db.db.collection("listaDeLocais");
    await listaDeLocais.insertOne(novo);

    res.end(JSON.stringify({ status: "ok" }));
  } else {
    res.end(JSON.stringify({ status: "falhou" }));
  }
}
