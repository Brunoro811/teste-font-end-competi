export interface CardPokemonData{
    number?:  number
    type: string
    image?: any
    alt? : string
    name?: string
    abilities: [
        {
          ability: {
            name: string;
            url: string;
          };
        }
      ]
      stats: [
        {
            base_stat: number,
            effort: number,
            stat: {
            name: string,
            url: string
            }
          }
      ]
}
export interface SpanTypePokemonProps{
    type: string
}