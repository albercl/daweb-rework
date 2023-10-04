import {z} from "zod";


export const defaultPageSize = 10;
export const defaultPage = 0;

export const paginatorSchema = z.object({
  pageSize: z.number().min(1).max(25).default(defaultPageSize),
  page: z.number().min(0).default(defaultPage)
}).default({
  pageSize: defaultPageSize,
  page: defaultPage
})

export async function paginateQueryData<T>(
  paginator: z.infer<typeof paginatorSchema>,
  query: (pageSize: number, page: number) => Promise<T[]>)
{
  return {
    data: await query(paginator.pageSize, paginator.page),
    pagination: paginator
  }
}