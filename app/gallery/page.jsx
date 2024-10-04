import {CharacterCard} from "@/components/characterCard"
import {fetchMarvelCharacters} from "@/app/actions/getCharacters"

const MarvelGallery = async () => {

  let data = await fetchMarvelCharacters();
  let characters = await data.json();
  console.log(characters);

  return (
    <div>
        {characters.map(character => (
        <div key={character.id} className="w-full max-w-sm mx-auto overflow-hidden">
          <CharacterCard
            name={character.name}
            description={character.description}
            imageUrl={character.thumbnail}
            comicsCount={character.comics.available}
          />
        </div>
      ))}
    </div>
  )
}

export default MarvelGallery