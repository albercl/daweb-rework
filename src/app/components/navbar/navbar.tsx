'use client';

import {NavbarContent, Navbar, NavbarItem} from "@nextui-org/navbar";
import React, {useEffect, useState} from "react";
import {signIn, signOut, useSession} from "next-auth/react";
import {Button} from "@nextui-org/button";
import {Avatar} from "@nextui-org/avatar";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Link} from "@nextui-org/link";
import {Moon, Sun} from "react-feather";
import {themesRootClasses} from "@/app/constants";
import NextLink from 'next/link';

export default function AppNavbar() {
  const {data: session} = useSession();
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const rootElement = document.getElementsByTagName('html').item(0);
    if(!rootElement) return;

    if(isDarkTheme)
      rootElement.setAttribute('class', themesRootClasses.dark);
    else
      rootElement.setAttribute('class', themesRootClasses.light);

  }, [isDarkTheme]);

  return (
    <Navbar maxWidth='xl'>
      <NavbarContent justify="start">
        <NavbarItem isActive>
          <Link href="#" aria-current="page" as={NextLink}>
            Inicio
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            onPress={() => setIsDarkTheme(!isDarkTheme)}
            variant="light"
            isIconOnly
            startContent={
              isDarkTheme ? <Sun/> : <Moon/>
            }
          />
        </NavbarItem>
        {session === null ?
          <NavbarItem>
            <Button color="primary" onClick={() => signIn('github')}>
              Sign in
            </Button>
          </NavbarItem>
          :
          <>
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger className="cursor-pointer">
                  <Avatar showFallback src={session?.user?.image ?? undefined} isFocusable as="button"/>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem key="signout" onClick={() => signOut()}>Sign out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </>
        }
      </NavbarContent>
    </Navbar>
  )
}