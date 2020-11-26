import Head from "next/head";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0070f3",
    },
  },
});

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
    window.location.href = "/";
  });
};

export default function novo(props) {
  return (
    <div className="container">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <title>Adicionar Local</title>
      </Head>

      <header className="novo">
        <h1>
          Adicionar novo <span>Local</span>
        </h1>
        <p>Insira os dados abaixo para efetuar o cadastro de um novo local</p>
      </header>

      <main>
        <MuiThemeProvider theme={theme}>
          <form className="card" id="addLocal" onSubmit={addLocal}>
            <TextField name="nomeDaPessoa" label="Seu Nome" variant="outlined" required />
            <br/>
            <TextField name="email" label="Seu E-Mail" variant="outlined" required />
            <br/>
            <TextField name="nome" label="Nome do Local" variant="outlined" required />
            <br/>
            <TextField name="endereço" label="Endereço do Local" variant="outlined" required />
            <br/>
            <TextField name="descrição" label="Descrição" variant="outlined" multiline required />
            <br/>
            <Button type="submit">Send</Button>
          </form>
        </MuiThemeProvider>
      </main>
    </div>
  );
}
