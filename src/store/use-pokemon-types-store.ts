"use client";

import { getPokemonTypes } from "@/app/api/pokemon-types/get-pokemon-types";
import { create } from "zustand";

/**
 * Represents the state of the Pokemon types store.
 */
export interface PokemonTypesStoreState {
  /** An array of Pokemon types. */
  types: string[];

  /**
   * Fetches the Pokemon types and updates the store.
   * @returns A promise that resolves when the types have been fetched.
   */
  fetchTypes: () => Promise<void>;
}

/**
 * Creates a Zustand store for managing Pokemon types.
 * @returns The Pokemon types store with state and actions.
 */
export const usePokemonTypesStore = create<PokemonTypesStoreState>((set) => ({
  types: [],
  fetchTypes: async () => {
    const response = await getPokemonTypes();
    set({ types: response });
  },
}));
