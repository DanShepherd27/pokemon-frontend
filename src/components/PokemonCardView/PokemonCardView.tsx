import { Pokemon } from "@/lib/types/Pokemon";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export default function PokemonCardView({ data }: { data?: Pokemon }) {
  return (
    <Card className="m-4 h-100 w-100">
      <CardContent className="flex flex-col">
        <Image
          src={data?.imageUrl || ""}
          alt={data?.name || "no image"}
          width={150}
        />
        <h3>{data?.name}</h3>
        <p>Height: {data?.height}</p>
        <p>Weight: {data?.weight}</p>
        {data?.notHiddenAbilities &&
          data.notHiddenAbilities.length > 0 &&
          data.notHiddenAbilities.map((ability, index) => (
            <p key={index}>{ability}</p>
          ))}
      </CardContent>
    </Card>
  );
}
