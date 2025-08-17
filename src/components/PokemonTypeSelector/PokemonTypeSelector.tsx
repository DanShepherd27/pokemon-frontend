import { usePokemonStore } from "@/store/use-pokemon-store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect } from "react";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

/**
 * A component that allows users to select a Pokémon type.
 *
 * @component
 * @example
 * return (
 *   <PokemonTypeSelector />
 * )
 */
export default function PokemonTypeSelector() {
  const { types, fetchTypes, fetchPokemons } = usePokemonStore();

  useEffect(() => {
    (async () => await fetchTypes())();
  }, [fetchTypes]);

  const loadPokemonsOfType = async (type: string) => {
    await fetchPokemons(type);
  };

  return (
    <Select
      onValueChange={(value: string) => {
        loadPokemonsOfType(value);
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select from the list" />
      </SelectTrigger>
      <SelectContent>
        {types.length === 0 ? (
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          types.map((type: string) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
}
