import { Place } from "@prisma/client";

type TPlaces = Place[] | "NotFound" | "Loading" | "Error";

export default TPlaces;
