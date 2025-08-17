import { Card, CardContent } from "../ui/card";

export default function PokemonPreview({ data }: { data: string }) {
  return (
    <Card className="cursor-pointer">
      <CardContent>
        <p>{data}</p>
      </CardContent>
    </Card>
  );
}
