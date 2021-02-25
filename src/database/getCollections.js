import connectToDatabase from "./connectToMongo";

let mongo;

const getLocations = async () => {
  if (mongo === undefined) {
    mongo = await connectToDatabase();
  }

  return await mongo.db.collection("locations");
};

export { getLocations };
