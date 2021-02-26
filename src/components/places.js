import Place from "./place";

export default function Places({ places }) {
  return (
    <section>
      {places.map((place) => {
        return <Place place={place} key={place._id}></Place>;
      })}
    </section>
  );
}
