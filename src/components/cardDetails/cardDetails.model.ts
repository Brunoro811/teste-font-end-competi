import { Pokemon } from "../../providers/pokemon/pokemon.model";

export interface CardDetailsData extends Pokemon {
    callback: () => void;
    alt: string;
  }

  export interface RowStatsProps {
    name: string;
    base_stat: number;
  }