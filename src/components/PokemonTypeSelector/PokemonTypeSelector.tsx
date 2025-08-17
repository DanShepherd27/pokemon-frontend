import { usePokemonTypesStore } from "@/store/use-pokemon-types-store";
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
  const { types, fetchTypes } = usePokemonTypesStore();

  useEffect(() => {
    (async () => await fetchTypes())();
  }, [fetchTypes]);

  return (
    <Select onValueChange={() => {}}>
      <SelectTrigger>
        <SelectValue placeholder="Select from the list" />
      </SelectTrigger>
      <SelectContent>
        {types.length === 0 ? (
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          types.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
}
