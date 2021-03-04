import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || ""; // trick ts :(
const dbName = process.env.MONGODB_DB;

let cachedClient: any = null;
let cachedDb: any = null;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

if (!dbName) {
  throw new Error("Please define the MONGODB_DB environment variable inside .env.local");
}

export default async function connectToDatabase(): Promise<any> {
  if (cachedClient && cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return db;
}
