import {fetchRequestHandler} from '@trpc/server/adapters/fetch';
import {appRouter} from '@/server/app-router';

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: appRouter,
    createContext: function (): object | Promise<object> {
      // empty context
      return {};
    }
  });
};

export const GET = handler;
export const POST = handler;