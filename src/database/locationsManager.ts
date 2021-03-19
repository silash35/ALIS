import md5 from "md5";
import { Collection, ObjectID } from "mongodb";

import { IPlace } from "@/types/IPlace";

import { getPlaces } from "./getPlaces";

class LocationsManager {
  locations: Collection;

  constructor() {
    this.loadCollection();
  }

  async loadCollection() {
    if (this.locations == undefined) {
      this.locations = await getPlaces();
    }
  }

  // Read functions
  async findPlaces(search: string) {
    await this.loadCollection();
    const places: IPlace[] = await this.locations.find({ $text: { $search: search } }).toArray();
    return places;
  }

  async getAllPlaces() {
    await this.loadCollection();
    const places: IPlace[] = await this.locations.find({}).toArray();
    return places;
  }

  async getPlaceByID(id: string) {
    await this.loadCollection();
    const place: IPlace = await this.locations.findOne({ _id: new ObjectID(id) });
    return place;
  }

  // Write functions
  async insertPlace(place: IPlace) {
    await this.loadCollection();
    place.key = md5(place.key);
    await this.locations.insertOne(place);
  }

  async deletePlace(id: string, key: string) {
    await this.loadCollection();
    const place: IPlace = await this.getPlaceByID(id);

    if (place.key == md5(key)) {
      await this.locations.deleteOne({ _id: new ObjectID(id) });
      return 200;
    }
    return 401;
  }
}

const locationsManager = new LocationsManager();
export default locationsManager;
