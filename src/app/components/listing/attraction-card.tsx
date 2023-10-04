import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Chip, Image} from "@nextui-org/react";
import {Search, ShoppingBag, Star} from "react-feather";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {Skeleton} from "@nextui-org/skeleton";

export interface PlaceCardProps {
  id: number;
  title: string,
  image: string,
  rating: number,
  loading: boolean
}

export default function AttractionCard({id, title, image, rating, loading}: PlaceCardProps) {

  const ratingColor: () => "primary" | "default" | "secondary" | "success" | "warning" | "danger" | undefined = () => {
    if (rating >= 4)
      return "success"

    if (rating >= 2)
      return "warning"

    return "danger"
  }

  return (
    <Card className="h-auto bg-clip-content gap-3">
      <CardHeader className="justify-between gap-3 h-auto flex-grow pb-0">
        <Skeleton isLoaded={!loading} className="rounded-lg min-h-7">
          <span className="text-2xl self-start">
            <strong>{title}</strong>
          </span>
        </Skeleton>
        <Skeleton isLoaded={!loading} className="rounded-lg">
          <div className="self-start">
            <Chip
              endContent={<Star width={16} height={16}/>}
              startContent={<span className="pl-1">{rating.toFixed(1)}</span>}
              color={ratingColor()}
              className="align-middle w-full"
            />
          </div>
        </Skeleton>
      </CardHeader>
      <CardBody className="p-3 gap-5 h-[250px] flex-grow-0 py-0">
        <Skeleton isLoaded={!loading} className="rounded-lg w-full h-full">
          <div className="w-full h-full">
            <Image
              alt={'Imagen de ' + title}
              src={image}
              className="object-cover h-full w-full"
              removeWrapper={true}
            />
          </div>
        </Skeleton>
      </CardBody>
      <CardFooter className="pt-0">
        <Skeleton isLoaded={!loading} className="rounded-lg w-full">
          <div className="flex flex-col justify-center gap-3">
            <Button
              className="w-full"
              color="primary"
              startContent={<Search size={24}/>}
              href={`/attractions/${id}`}
              as={Link}
            >
              Detalles
            </Button>
            <Button
              className="w-full"
              color="primary"
              startContent={<ShoppingBag size={24}/>}
            >
              Comercios
            </Button>
          </div>
        </Skeleton>
      </CardFooter>
    </Card>
  )
}