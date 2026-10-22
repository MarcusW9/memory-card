// Fetches the data for the cards from an external API.
// Example uses PokéAPI (no API key needed). Swap for Giphy etc. if you like.
//
// Each card should end up as: { id, name, image }

export const POKEMON_IDS = [1, 4, 7, 25, 39, 52, 54, 94, 133, 143, 150, 151]

export async function fetchCards() {
  // TODO: fetch each id from https://pokeapi.co/api/v2/pokemon/<id>
  // and map the response to { id, name, image: data.sprites.front_default }
  // Hint: Promise.all lets you fetch them in parallel.
  throw new Error('fetchCards is not implemented yet')
}
