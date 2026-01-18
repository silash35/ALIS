import Head from "next/head";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Title from "@/components/common/Title";
import Topics from "@/components/common/Topics";

const DeprecationPage = () => (
  <>
    <Head>
      <title>Até mais, e Obrigado pelos Peixes!</title>
      <meta content="Aviso de desligamento do projeto ALIS" name="description" />
    </Head>

    <Header />
    <main>
      <Title small>
        <h1>Até mais, e Obrigado pelos Peixes!</h1>
      </Title>

      <Topics>
        <section>
          <p>
            Este site foi <span>desligado</span>.
          </p>

          <p>
            Originalmente, o ALIS funcionava como uma plataforma colaborativa onde qualquer pessoa
            podia fazer login com sua conta Google e publicar locais que considerasse inclusivos
            para a comunidade surda.
          </p>

          <p>
            Com o passar do tempo, tornou-se inviável continuar mantendo o projeto. Hoje, não tenho
            mais tempo para focar no desenvolvimento, manutenção e nas atualizações de segurança
            necessárias para um sistema com autenticação e edição de dados. Manter um site desse
            tipo funcionando sem as devidas correções e cuidados de segurança seria uma
            irresponsabilidade.
          </p>

          <p>
            Por isso, todas as funcionalidades de login, cadastro e edição foram desligadas. A
            versão disponível aqui é totalmente estática: apenas uma memória do que o projeto já
            foi.
          </p>

          <p>
            Este site foi desenvolvido há muitos anos, quando eu ainda estava no ensino médio. É
            curioso (e até engraçado) revisitar esse código hoje e perceber que eu certamente não
            escreveria tudo da mesma forma. Ironicamente, também é possível notar alguns problemas
            de acessibilidade pelo site.
          </p>

          <p>
            Ainda assim, sou grato por tudo o que o ALIS representou. Obrigado a todas as pessoas
            que participaram e acreditaram na ideia.
          </p>
        </section>
      </Topics>
    </main>
    <Footer />
  </>
);

export default DeprecationPage;
