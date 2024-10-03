import { fetchMarvelCharacters } from '@/app/actions/getCharacters';

export default async function Home() {

  
  const characters = await fetchMarvelCharacters();
  
  return (
    <div>
    <h1>Marvel Characters</h1>
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  </div>
  );
}
