"use server";

import axios, { HttpStatusCode } from "axios";

export async function getPokemons(type?: string): Promise<string[]> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/pokemon?type=${type || ""}`
    );

    if (response.status !== HttpStatusCode.Ok) {
      console.error("Error fetching Pokemons:", response.status);
      return [];
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemons:", error);
    return [];
  }
}
