import { usePokemonStore } from "@/store/use-pokemon-store";
import { Card, CardContent } from "../ui/card";

export default function PokemonPreview({ name }: { name: string }) {
  const { selectedPokemon, setSelectedPokemon } = usePokemonStore();

  return (
    <Card
      className={`${
        selectedPokemon?.name === name ? "bg-green-300" : ""
      } cursor-pointer`}
      onClick={() => setSelectedPokemon(name)}
    >
      <CardContent>
        <p>{name}</p>
      </CardContent>
    </Card>
  );
}
