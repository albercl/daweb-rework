'use client';

import "./globals.css";
import SearchBar from "@/app/components/search/search-bar";
import {Card, CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/react";
import React from "react";

export default function Home() {
  return (
      <>
        <h1 className="text-3xl text-center my-5">Accesibility Reviews</h1>
        <SearchBar/>
        <DestinationCardContainer>
          <DestinationCard title="Lorca" description="Lorca es un municipio lleno de contrastes. El centro de la ciudad fue declarado Conjunto Histórico Artístico en 1964 y su Castillo, declarado Monumento Nacional en 1931. Pasea por la Lorca de murallas medievales, de iglesias renacentistas, de palacios barrocos y de teatros decimonónicos."/>
          <DestinationCard title="Lorca" description="Lorca es un municipio lleno de contrastes. El centro de la ciudad fue declarado Conjunto Histórico Artístico en 1964 y su Castillo, declarado Monumento Nacional en 1931. Pasea por la Lorca de murallas medievales, de iglesias renacentistas, de palacios barrocos y de teatros decimonónicos."/>
          <DestinationCard title="Lorca" description="Lorca es un municipio lleno de contrastes. El centro de la ciudad fue declarado Conjunto Histórico Artístico en 1964 y su Castillo, declarado Monumento Nacional en 1931. Pasea por la Lorca de murallas medievales, de iglesias renacentistas, de palacios barrocos y de teatros decimonónicos."/>
        </DestinationCardContainer>
      </>
  );
}

interface DestinationCardProps {
  title: string,
  description: string
}

function DestinationCard({title, description}: DestinationCardProps) {
  return (
    <Card className="py-4 w-full sm:w-1/3 text-center" isPressable isHoverable >
      <CardBody className="py-2 text-center">
        <Image
          alt="Card lorca"
          className="rounded-xl"
          src="https://i.ytimg.com/vi/56kVKLPzOlQ/maxresdefault.jpg"
          width={1280}
        />
        <span className="font-bold text-2xl my-2">{title}</span>
        <p>{description}</p>
      </CardBody>
    </Card>
  )
}

function DestinationCardContainer({children}: {children: React.ReactNode}) {
  return (
    <div className="flex gap-5 py-5 flex-col sm:flex-row">
      {children}
    </div>
  )
}