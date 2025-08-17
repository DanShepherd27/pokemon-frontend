"use client";

import PokemonPreview from "@/components/PokemonPreview/PokemonPreview";
import PokemonTypeSelector from "@/components/PokemonTypeSelector/PokemonTypeSelector";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePokemonStore } from "@/store/use-pokemon-store";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);
  const { pokemons } = usePokemonStore();

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
        <div>Hello, Pokemon!</div>
        <PokemonTypeSelector />
        {pokemons.map((pokemon: string, index: number) => (
          <PokemonPreview data={pokemon} key={index} />
        ))}
      </div>
    </div>
  );
}
