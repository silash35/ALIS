import CircularProgress from "@mui/material/CircularProgress";
import { Place } from "@prisma/client";
import { useState } from "react";

import Title from "@/components/common/Title";
import Places from "@/components/index/PlaceCards";
import Search from "@/components/index/Search";

const Main = () => {
  const [places, setPlaces] = useState([] as Place[]);

  return (
    <main>
      <Title cursive>
        <h1>
          Bem&nbsp;vindo ao&nbsp;<span>alis</span>
        </h1>
        <p>O Agregador de Locais Inclusivos para Surdos</p>
      </Title>

      <Search setPlaces={setPlaces} />

      <Places places={places} />
    </main>
  );
};

export default Main;