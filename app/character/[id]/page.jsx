import { fetchMarvelCharacterById } from '@/app/actions/getSingleCharacter'

export default async function CharacterDetailPage ({ params }) {
  const { id } = params
  const character = await fetchMarvelCharacterById(id)

  if (!character) {
    return <p>Character not found or failed to fetch data.</p>
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <p>{character.description || 'No description available'}</p>
    </div>
  )
}