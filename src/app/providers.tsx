'use client'

import {NextUIProvider} from '@nextui-org/react'
import {SessionProvider} from "next-auth/react";
import {TrpcProvider} from "@/app/components/trpc/trpc-provider";

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
          <SessionProvider>
            {children}
          </SessionProvider>
        </NextUIProvider>
    )
}