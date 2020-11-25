import Head from "next/head";

const addLocal = () => {
  const formData = new FormData(document.getElementById("addLocal"));
  let formDataObject = {};

  for (let [key, value] of formData.entries()) {
    formDataObject[key] = value;
  }

  const data = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formDataObject),
  };

  fetch("/api/local", data).then(() => {
    //window.location.href = "/";
  });
};

export default function novo(props) {
  return (
    <div className="container">
      <Head>
        <title>Adicionar Local</title>
      </Head>

      <header>
        <h1>
          Adicionar novo <span>Local</span>
        </h1>
      </header>

      <main>
        <form className="card" id="addLocal" onSubmit={addLocal}>
          <label>
            Seu nome:
            <input type="text" name="nomeDaPessoa" required />
          </label>
          <br />
          <label>
            Seu E-Mail:
            <input type="text" name="email" required />
          </label>
          <br />
          <label>
            Nome do Local:
            <input type="text" name="nome" required />
          </label>
          <br />
          <label>
            Endereço do Local:
            <input type="text" name="endereco" required />
          </label>
          <br />
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}
