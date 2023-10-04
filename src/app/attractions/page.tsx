'use client';

import "@/app/globals.css";
import SearchBar from "@/app/components/search/search-bar";
import {trpc} from "@/app/trpc";
import {useSearchParams} from "next/navigation";
import AttractionCard from "@/app/components/listing/attraction-card";

export default function PlacesPage() {
  const params = useSearchParams();
  const cityId = params.get('cityId');

  let response =
    cityId === null
      ? trpc.attraction.findAllAttractions.useQuery({})
      : trpc.attraction.findAttractionsByCity.useQuery({cityId: parseInt(cityId)});

  const renderData = () => {
    if(response.isLoading)
      return

    if(response.isError)
      return (
        <>
          <h1>Error</h1>
          <p>{response.error?.message}</p>
        </>
      )

    return response.data!.data.map((a) => <AttractionCard key={a.id} id={a.id} title={a.name} image={a.imageUrl} rating={a.rating}/>)
  }

  return (
    <>
      <SearchBar/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {renderData()}
      </div>
    </>
  );
}

