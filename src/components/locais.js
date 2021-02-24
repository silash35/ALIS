import Place from "./place";

export default function Locais(props) {
  return (
    <section>
      {props.locais.map((local) => {
        return <Place local={local} key={local._id}></Place>;
      })}
    </section>
  );
}
