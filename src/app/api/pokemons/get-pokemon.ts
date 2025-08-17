"use server";

import { Pokemon } from "@/lib/types/Pokemon";
import axios, { HttpStatusCode } from "axios";

export async function getPokemon(name: string): Promise<Pokemon | null> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/pokemon/one?name=${name}`
    );

    if (response.status !== HttpStatusCode.Ok) {
      console.error("Error fetching Pokemon:", response.status);
      return null;
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    return null;
  }
}
