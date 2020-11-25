import { useRouter } from 'next/router';
import Head from "next/head";

const addLocal = () => {
  var data = {
    method: "post",
    body: JSON.stringify({nome:"sorveteria gelatudo"})
  };

  fetch("/api/local", data).then(() => {
    window.location.href = "/"
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
        <div>
          <button onClick={addLocal}>Add</button>
        </div>
      </main>
    </div>
  );
}
