import {router} from '@/server/trcp';
import {attractionRouter} from '@/server/attraction/attraction-router';

export const appRouter = router({
  attraction: attractionRouter
});

export type AppRouter = typeof appRouter;