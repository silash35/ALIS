import Local from "./local";

export default function Locais(props) {
  return (
    <section>
      {props.locais.map((local) => {
        return <Local local={local} key={local._id}></Local>;
      })}
    </section>
  );
}
