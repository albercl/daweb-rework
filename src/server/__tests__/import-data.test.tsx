import {describe, it} from '@jest/globals';
import {PrismaClient} from '@prisma/client';
import lorcaData from '../../../data/Lorca.json';
import tenerifeData from '../../../data/Tenerife.json';
import malagaData from '../../../data/Malaga.json';

const prisma = new PrismaClient();

export interface CityData {
  geonames: Geoname[];
}

export interface Geoname {
  summary:      string;
  elevation:    number;
  feature?:     string;
  lng:          number;
  distance:     string;
  countryCode?:  string;
  rank:         number;
  lang:         string;
  title:        string;
  lat:          number;
  wikipediaUrl: string;
  imageUrl:     string;
  description:  string;
  geoNameId?:   number;
}


async function persistData(cityid: number, values: CityData) {
  for (const attraction of values.geonames) {
    await prisma.touristAttraction.create({
      data: {
        name: attraction.title,
        description: attraction.description,
        cityId: cityid,
        lat: attraction.lat,
        lon: attraction.lng,
        imageUrl: attraction.imageUrl,
        wikipediaUrl: attraction.wikipediaUrl
      }
    });
  }
}

describe('app', () => {
  it('should load data from Lorca', async () => {
    await persistData(1, lorcaData);
  });

  it('should load data from Malaga', async () => {
    await persistData(2, malagaData);
  });

  it('should load data from Tenerife', async () => {
    await persistData(3, tenerifeData);
  });
});