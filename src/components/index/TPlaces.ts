interface TPlace {
  id: string;
  userMail: string;
  name: string;
  address: string;
  description: string;
  email?: string;
  phone?: string;
  website?: string;
  imageURL?: string;
}

type TPlaces = TPlace[] | "NotFound" | "Loading" | "Error";

export type { TPlace, TPlaces };

export default TPlaces;
