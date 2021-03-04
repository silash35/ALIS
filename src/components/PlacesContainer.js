import Place from "./Place";

export default function PlacesContainer({ places }) {
  return (
    <section>
      {places.map((place) => {
        return <Place place={place} key={place._id}></Place>;
      })}
    </section>
  );
}
