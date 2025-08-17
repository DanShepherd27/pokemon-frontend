"use client";

import PokemonCardView from "@/components/PokemonCardView/PokemonCardView";
import PokemonPreview from "@/components/PokemonPreview/PokemonPreview";
import PokemonTypeSelector from "@/components/PokemonTypeSelector/PokemonTypeSelector";
import SearchBar from "@/components/SearchBar/SearchBar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Pokemon } from "@/lib/types/Pokemon";
import { usePokemonStore } from "@/store/use-pokemon-store";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);
  const { pokemons, selectedPokemon } = usePokemonStore();

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  return (
    <div>
      <NavigationMenu className="flex justify-end w-full min-w-full p-4">
        <NavigationMenuList>
          <NavigationMenuItem>
            <SearchBar />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              {session ? (
                <Link href="/api/auth/signout">Sign out</Link>
              ) : (
                <Link href="/api/auth/signin">Sign in</Link>
              )}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-col items-center h-screen">
        <PokemonTypeSelector />
        <div className="mt-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pokemons.map((pokemon: string, index: number) => (
            <PokemonPreview name={pokemon} key={index} />
          ))}
        </div>
        {selectedPokemon?.name !== "" && <PokemonCardView />}
      </div>
    </div>
  );
}
