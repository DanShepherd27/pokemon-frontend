"use client";

import PokemonTypeSelector from "@/components/PokemonTypeSelector/PokemonTypeSelector";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavigationMenu className="flex justify-end w-full min-w-full p-4">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/api/auth/signin">Sign in</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-col items-center h-screen">
        <div>Hello, Pokemon!</div>
        <PokemonTypeSelector />
      </div>
    </div>
  );
}
