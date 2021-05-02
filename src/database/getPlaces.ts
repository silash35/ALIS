import { Collection, Db } from "mongodb";

import connectToDatabase from "./connectToMongo";

let db: Db;

export const getPlaces = async (): Promise<Collection> => {
  if (db === undefined) {
    db = await connectToDatabase();
  }

  return await db.collection("places");
};
