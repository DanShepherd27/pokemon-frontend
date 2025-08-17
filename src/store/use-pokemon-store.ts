"use client";

import { getPokemonTypes } from "@/app/api/pokemon-types/get-pokemon-types";
import { getPokemons } from "@/app/api/pokemons/get-pokemons";
import { create } from "zustand";

/**
 * Represents the state of the Pokemon store.
 */
export interface PokemonStoreState {
  /** An array of Pokemon types. */
  types: string[];

  pokemons: string[];

  /**
   * Fetches the Pokemon types and updates the store.
   * @returns A promise that resolves when the types have been fetched.
   */
  fetchTypes: () => Promise<void>;

  fetchPokemons: (type: string) => Promise<void>;
}

/**
 * Creates a Zustand store for managing Pokemon data.
 * @returns The Pokemon store with state and actions.
 */
export const usePokemonStore = create<PokemonStoreState>((set) => ({
  types: [],
  pokemons: [],
  fetchTypes: async () => {
    const types = await getPokemonTypes();
    set({ types });
  },
  fetchPokemons: async (type: string) => {
    const pokemons = await getPokemons(type);
    set({ pokemons });
  },
}));
