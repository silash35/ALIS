import { Prisma } from "@prisma/client";

type Place = Omit<Prisma.PlaceCreateInput, "id" | "userMail">;
export type { Place };

interface User {
  name: string;
  email: string;
  image: string;
  password: string;
}
export type { User };
