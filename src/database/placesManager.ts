import { Place } from "@prisma/client";
import md5 from "md5";

import prisma from "./prisma";

class PlacesManager {
  // Read functions
  async find(search: string) {
    await prisma.$connect();

    const places = await prisma.place.findMany({
      where: {
        OR: [
          { userName: { contains: search, mode: "insensitive" } },
          { name: { contains: search, mode: "insensitive" } },
          { address: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      },
    });

    await prisma.$disconnect();

    return places;
  }

  async getAll() {
    await prisma.$connect();
    const allPlaces = await prisma.place.findMany();
    await prisma.$disconnect();

    return allPlaces;
  }

  async getByID(id: string) {
    await prisma.$connect();
    const place = await prisma.place.findUnique({ where: { id: id } });
    await prisma.$disconnect();

    return place;
  }

  // Write functions
  async insert(place: Place) {
    place.key = md5(place.key);

    await prisma.place.create({ data: parsePlaceCreate(place) });
  }

  async delete(id: string, key: string) {
    await prisma.$connect();
    const oldPlace = await prisma.place.findUnique({ where: { id: id } });

    if (oldPlace?.key == md5(key)) {
      await prisma.place.delete({ where: { id: id } });

      return 200;
    }

    await prisma.$disconnect();
    return 401;
  }

  async update(id: string, newPlace: Place, key: string) {
    await prisma.$connect();
    const oldPlace = await prisma.place.findUnique({ where: { id: id } });

    if (oldPlace?.key == md5(key)) {
      await prisma.place.update({
        where: {
          id: String(id),
        },
        data: parsePlaceUpdate(newPlace),
      });
      return 200;
    }

    await prisma.$disconnect();
    return 401;
  }
}

const parsePlaceUpdate = (place: Place) => {
  const parsedPlace = {
    name: parseString(place.name),
    description: parseString(place.description),
    address: parseString(place.address),
    phone: parseString(place.phone),
    email: parseString(place.email),
    imageURL: parseString(place.imageURL),
    website: parseString(place.website),
  } as Place;

  return parsedPlace;
};

const parsePlaceCreate = (place: Place) => {
  const parsedPlace = {
    userName: parseString(place.userName),
    userMail: parseString(place.userMail),
    name: parseString(place.name),
    description: parseString(place.description),
    address: parseString(place.address),
    key: parseString(place.key),
    phone: parseString(place.phone),
    email: parseString(place.email),
    imageURL: parseString(place.imageURL),
    website: parseString(place.website),
  } as Place;

  return parsedPlace;
};

const parseString = (string: string | null) => {
  if (typeof string === "string" && string.length >= 1) {
    return string;
  } else {
    return null;
  }
};

const placesManager = new PlacesManager();
export default placesManager;
