import prisma from '@/server/prisma-client';

export async function findAttractionById(attractionId: number) {
  return prisma.touristAttraction.findFirst({
    where: {id: attractionId}
  });
}

export async function findAllAttractionsByCity(cityId: number, pageSize: number, page: number) {
  return prisma.touristAttraction.findMany({
    where: {cityId},
    skip: page * pageSize,
    take: pageSize
  });
}

export async function findAllAttractions(pageSize: number, page: number) {
  return prisma.touristAttraction.findMany({
    skip: page * pageSize,
    take: pageSize
  });
}

export function findAllAttractionsBySearchTerm(searchTerm: string) {
  return searchTerm;
}