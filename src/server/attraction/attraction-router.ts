import {z} from "zod";
import {procedure, router} from "@/server/trcp";
import {
  findAllAttractions,
  findAllAttractionsByCity,
  findAttractionById
} from "@/server/attraction/attractions-service";
import {defaultPage, defaultPageSize, paginateQueryData, paginatorSchema} from "@/utils/paginator";

export const attractionRouter = router({
  findAttractionsByCity: procedure
    .input(z.object({
      cityId: z.number(),
      paginator: paginatorSchema
    }))
    .query(async (req) => {
      return await paginateQueryData(
        req.input.paginator,
        async (pageSize, page) =>
          findAllAttractionsByCity(req.input.cityId, pageSize, page)
      )
    }),
  findAllAttractions: procedure
    .input(z.object({
      paginator: paginatorSchema
    }))
    .query(async (req) => {
      return await paginateQueryData(
        req.input.paginator,
        async (pageSize, page) => findAllAttractions(pageSize, page)
      )
    }),
  findAttractionById: procedure
    .input(z.number().min(0))
    .query(async (req) => {
      return findAttractionById(req.input);
    })
});

export type AttractionRouter = typeof attractionRouter;