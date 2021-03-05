import { IPlace } from "@/types/IPlace";

import Place from "./Place";

interface Props {
  places: IPlace[];
}

const PlacesContainer = ({ places }: Props) => {
  return (
    <section>
      {places.map((place) => {
        return <Place place={place} key={place._id}></Place>;
      })}
    </section>
  );
};

export default PlacesContainer;
