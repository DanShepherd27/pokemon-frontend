export class Pokemon {
  public name: string;
  public imageUrl: string;
  public types: string[];
  public weight: number;
  public height: number;
  public notHiddenAbilities: string[];

  constructor(
    name: string,
    imageUrl: string,
    types: string[],
    weight: number,
    height: number,
    notHiddenAbilities: string[]
  ) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.types = types;
    this.weight = weight;
    this.height = height;
    this.notHiddenAbilities = notHiddenAbilities;
  }
}
