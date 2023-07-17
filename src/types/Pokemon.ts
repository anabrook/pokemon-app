export type Pokemon = {
  name: string;
  url: string;
};

export type Characteristics = {
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
  };
};

export type PokemonWithCharacteristics = Pokemon & {
  characteristics: Characteristics;
  comment:
    | {
        name: string;
        comment: string;
      }
    | undefined;
};
