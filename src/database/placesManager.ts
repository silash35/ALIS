import md5 from "md5";
import { Collection, ObjectID } from "mongodb";

import { IPlace } from "@/types/IPlace";

import { getPlaces } from "./getPlaces";

type TPlace = IPlace | null | undefined;
type TPlaces = IPlace[] | null | undefined;

class PlacesManager {
  locations: Collection | undefined;

  constructor() {
    this.loadCollection();
  }

  async loadCollection() {
    if (this.locations == undefined) {
      this.locations = await getPlaces();
    }
  }

  idIsValid(id: string) {
    try {
      new ObjectID(id);
    } catch (error) {
      return false;
    }
    return true;
  }

  // Read functions
  async find(search: string) {
    await this.loadCollection();
    const places: TPlaces = await this.locations?.find({ $text: { $search: search } }).toArray();
    return places;
  }

  async getAll() {
    await this.loadCollection();
    const places: TPlaces = await this.locations?.find({}).toArray();
    return places;
  }

  async getByID(id: string) {
    await this.loadCollection();
    if (this.idIsValid(id)) {
      const place: TPlace = await this.locations?.findOne({ _id: new ObjectID(id) });
      return place;
    }
    return null;
  }

  // Write functions
  async insert(place: IPlace) {
    await this.loadCollection();
    place.key = md5(place.key);
    await this.locations?.insertOne(place);
  }

  async delete(id: string, key: string) {
    await this.loadCollection();

    if (this.idIsValid(id)) {
      const place: TPlace = await this.getByID(id);
      if (place?.key == md5(key)) {
        await this.locations?.deleteOne({ _id: new ObjectID(id) });
        return 200;
      }
    }

    return 401;
  }

  async update(id: string, newPlace: TPlace, key: string) {
    await this.loadCollection();

    if (this.idIsValid(id)) {
      const oldPlace: TPlace = await this.getByID(id);

      if (oldPlace?.key == md5(key)) {
        await this.locations?.updateOne({ _id: new ObjectID(id) }, { $set: newPlace });
        return 200;
      }
    }

    return 401;
  }
}

const placesManager = new PlacesManager();
export default placesManager;
