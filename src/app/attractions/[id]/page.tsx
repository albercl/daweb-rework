'use client';

import {trpc} from '@/app/trpc';
import {Spinner} from '@nextui-org/react';

export default function PlacePage({params}: {params: {id?: string}}) {
  if(!params.id) {
    return <p>Invalid ID</p>;
  }

  const response = trpc.attraction.findAttractionById.useQuery(parseInt(params.id));

  const renderAttraction = () => {
    if(response.isLoading)
      return <Spinner size="lg"/>;

    if(response.isError)
      return (
        <>
          <p>Error al cargar el registro</p>
          <p>{response.error.message}</p>
        </>
      );

    if(response.data === null)
      return <p>No se ha encontrado el registro</p>;

    return <h1>{response.data.name}</h1>;
  };

  return renderAttraction();
}