import Local from "./local";

export default function Locais(props) {
  return (
    <div>
      {props.locais.map((local) => {
        return <Local local={local} key={local._id}></Local>;
      })}
    </div>
  );
}
