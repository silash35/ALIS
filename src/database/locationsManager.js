import md5 from "md5";
import { ObjectID } from "mongodb";

import { getLocations } from "./getCollections";

class LocationsManager {
  constructor() {
    let locations;

    const loadCollection = async () => {
      if (locations == undefined) {
        locations = await getLocations();
      }
    };

    // Read functions
    this.findPlaces = async (search) => {
      await loadCollection();
      const places = await locations.find({ $text: { $search: search } }).toArray();
      return places;
    };

    this.getAllPlaces = async () => {
      await loadCollection();
      const places = await locations.find({}).toArray();
      return places;
    };

    this.getByID = async (id) => {
      await loadCollection();
      const place = await locations.findOne({ _id: new ObjectID(id) });
      return place;
    };

    // Write functions
    this.insertPlace = async (place) => {
      await loadCollection();
      place.chave = md5(place.chave);
      await locations.insertOne(place);
    };

    this.deletePlace = async (id, key) => {
      await loadCollection();
      const place = await this.getByID(id);

      if (place.chave == md5(key)) {
        await locations.deleteOne({ _id: new ObjectID(id) });
        return 200;
      }
      return 401;
    };
  }
}

const locationsManager = new LocationsManager();
export default locationsManager;
