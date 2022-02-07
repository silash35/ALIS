import md5 from "md5";

import { IPlace } from "@/types/IPlace";

import prisma from "./prisma";

class PlacesManager {
  // Read functions
  async find(search: string) {
    await prisma.$connect();
    // const places: TPlaces = await this.locations?.find({ $text: { $search: search } }).toArray();
    search;

    const places = await prisma.places.findMany(); // Concertar depois
    await prisma.$disconnect();

    return places;
  }

  async getAll() {
    await prisma.$connect();
    const allPlaces = await prisma.places.findMany();
    await prisma.$disconnect();

    return allPlaces;
  }

  async getByID(id: string) {
    await prisma.$connect();
    const place = await prisma.places.findUnique({ where: { id: id } });
    await prisma.$disconnect();

    return place;
  }

  // Write functions
  async insert(place: IPlace) {
    place.key = md5(place.key);

    await prisma.places.create({ data: place });
  }

  async delete(id: string, key: string) {
    await prisma.$connect();
    const oldPlace = await prisma.places.findUnique({ where: { id: id } });

    if (oldPlace?.key == md5(key)) {
      await prisma.places.delete({ where: { id: id } });

      return 200;
    }

    await prisma.$disconnect();
    return 401;
  }

  async update(id: string, newPlace: IPlace, key: string) {
    await prisma.$connect();
    const oldPlace = await prisma.places.findUnique({ where: { id: id } });

    if (oldPlace?.key == md5(key)) {
      prisma.places.update({
        where: {
          id: id,
        },
        data: newPlace,
      });
      return 200;
    }

    await prisma.$disconnect();
    return 401;
  }
}

const placesManager = new PlacesManager();
export default placesManager;
