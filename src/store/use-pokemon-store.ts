"use client";

import { getPokemonTypes } from "@/app/api/pokemon-types/get-pokemon-types";
import { getPokemon } from "@/app/api/pokemons/get-pokemon";
import { getPokemons } from "@/app/api/pokemons/get-pokemons";
import { Pokemon } from "@/lib/types/pokemon";
import { create } from "zustand";

/**
 * Represents the state of the Pokemon store.
 */
export interface PokemonStoreState {
  /** An array of Pokemon types. */
  types: string[];

  pokemons: string[];

  selectedPokemon?: Pokemon | null;

  /**
   * Fetches the Pokemon types and updates the store.
   * @returns A promise that resolves when the types have been fetched.
   */
  fetchTypes: () => Promise<void>;

  fetchPokemons: (type: string) => Promise<void>;

  setSelectedPokemon: (pokemon: string) => void;
}

/**
 * Creates a Zustand store for managing Pokemon data.
 * @returns The Pokemon store with state and actions.
 */
export const usePokemonStore = create<PokemonStoreState>((set) => ({
  types: [],
  pokemons: [],
  selectedPokemon: undefined,
  fetchTypes: async () => {
    const types = await getPokemonTypes();
    set({ types });
  },
  fetchPokemons: async (type: string): Promise<void> => {
    const pokemons = await getPokemons(type);
    set({ pokemons });
  },
  setSelectedPokemon: async (pokemon: string): Promise<void> =>
    set({
      selectedPokemon: await getPokemon(pokemon),
    }),
}));
