"use server";

import axios, { HttpStatusCode } from "axios";

export async function getPokemonTypes(): Promise<string[]> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/pokemon-type`
    );

    if (response.status !== HttpStatusCode.Ok) {
      console.error("Error fetching Pokemon types:", response.status);
      return [];
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon types:", error);
    return [];
  }
}
