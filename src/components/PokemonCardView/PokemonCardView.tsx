import { Pokemon } from "@/lib/types/Pokemon";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { usePokemonStore } from "@/store/use-pokemon-store";

export default function PokemonCardView() {
  const { selectedPokemon } = usePokemonStore();

  return (
    <Card className="m-4 h-100 w-100">
      <CardContent className="flex flex-col">
        <Image
          src={selectedPokemon?.imageUrl || ""}
          alt={selectedPokemon?.name || "no image"}
          width={150}
        />
        <h3>{selectedPokemon?.name}</h3>
        <p>Height: {selectedPokemon?.height}</p>
        <p>Weight: {selectedPokemon?.weight}</p>
        {selectedPokemon?.notHiddenAbilities &&
          selectedPokemon.notHiddenAbilities.length > 0 &&
          selectedPokemon.notHiddenAbilities.map((ability, index) => (
            <p key={index}>{ability}</p>
          ))}
      </CardContent>
    </Card>
  );
}
