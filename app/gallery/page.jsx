'use client'
import { useEffect, useState } from "react";
import { fetchMarvelCharacters } from "@/app/actions/getCharacters";
import CharacterCard  from "@/components/characterCard";

const MarvelGallery = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const fetchedCharacters = await fetchMarvelCharacters();
        setCharacters(fetchedCharacters);
      } catch (err) {
        setError('Failed to load characters');
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {characters.map((character) => (
        <div key={character.id} className="w-full max-w-sm mx-auto overflow-hidden">
          <CharacterCard
            name={character.name}
            description={character.description}
            imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            comicsCount={character.comics.available}
          />
        </div>
      ))}
    </div>
  );
};

export default MarvelGallery;
