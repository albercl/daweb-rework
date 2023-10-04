import {describe, it} from "@jest/globals";
import {PrismaClient} from "@prisma/client";
import lorcaData from '../../../data/Lorca.json';
import tenerifeData from '../../../data/Tenerife.json'
import malagaData from '../../../data/Malaga.json'

const prisma = new PrismaClient();

function parseGeonames(attraction: any, cityId: number) {
  return {
    name: attraction.title,
    description: attraction.description,
    cityId: cityId,
    lat: attraction.lat,
    lon: attraction.lng,
    imageUrl: attraction.imageUrl,
    wikipediaUrl: attraction.wikipediaUrl
  }
}

async function persistData(cityid: number, values: any) {
  const promises: Promise<any>[] = [];
  for (const attraction of values.geonames) {
    const promise = prisma.touristAttraction.create({
      data: parseGeonames(attraction, cityid)
    })

    promises.push(promise);
  }

  await Promise.all(promises);
}

describe('app', () => {
  it('should load data from Lorca', async () => {
    await persistData(1, lorcaData);
  })

  it('should load data from Malaga', async () => {
    await persistData(2, malagaData);
  })

  it('should load data from Tenerife', async () => {
    await persistData(3, tenerifeData);
  })
})