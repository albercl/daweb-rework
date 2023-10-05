import { createTRPCReact } from '@trpc/react-query';
import {AppRouter} from '@/server/app-router';
export const trpc = createTRPCReact<AppRouter>();