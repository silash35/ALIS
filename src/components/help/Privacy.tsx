import Link from "next/link";

import Topics from "@/components/common/Topics";

export default function Privacy() {
  return (
    <Topics>
      <section>
        <h2>Política Privacidade</h2>
        <p>
          A sua privacidade é importante para nós. É política do ALIS respeitar a sua privacidade em
          relação a qualquer informação sua que possamos coletar no site <Link href="/">ALIS</Link>,
          e outros sites que possuímos e operamos.
        </p>
        <p>
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe
          fornecer um serviço. Fazemos por meios justos e legais, com o seu conhecimento e
          consentimento. Também informamos por que estamos coletando e como será usado.
        </p>
        <p>
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço
          solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis
          para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </p>
        <p>
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, com
          exceção do endereço de E-mail de usuários que possuem locais publicados na plataforma.
        </p>
        <p>
          O nosso site pode ter links para sites externos que não são operados por nós. Esteja
          ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos
          aceitar responsabilidade por suas respectivas políticas de privacidade.
        </p>
        <p>
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que
          talvez não possamos fornecer alguns dos serviços desejados.
        </p>
        <p>
          O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno
          de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com
          dados do usuário e informações pessoais, entre em contacto conosco.
        </p>
      </section>

      <section>
        <h2>Política de Cookies</h2>
        <p>
          Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são
          pequenos arquivos baixados no seu computador, para melhorar sua experiência.
        </p>
        <p>
          Você pode controlar os cookies, se desejar, a qualquer momento, acessando as configurações
          do seu navegador. No entanto, algumas das funcionalidades do site podem não estar
          disponíveis ou funcionar corretamente se você não permitir que os cookies sejam
          armazenados no seu computador.
        </p>
      </section>

      <section>
        <h2>Compromisso do Usuário</h2>
        <p>
          O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o ALIS
          oferece no site e com caráter enunciativo, mas não limitativo:
        </p>

        <ol>
          <li>
            Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem
            pública;
          </li>
          <li>
            Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, pornográfica, de
            apologia ao terrorismo ou contra os direitos humanos;
          </li>
          <li>
            Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do ALIS, de seus
            fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer
            outros sistemas de hardware ou software que sejam capazes de causar os danos
            anteriormente mencionados.
          </li>
        </ol>
      </section>
    </Topics>
  );
}
