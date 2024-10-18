import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import generateMarvelAuth from '@/utils/marvelAuth';

const CharacterDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      if (!id) return;

      const { publicKey, hash, ts } = generateMarvelAuth();
      const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Marvel API Error:', errorData);
          throw new Error(`Marvel API Error: ${errorData.status}`);
        }

        const data = await response.json();
        setCharacter(data.data.results[0]);
      } catch (error) {
        console.error('Error fetching character details:', error);
        setError('Failed to load character details');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      {character && (
        <>
          <h1 className="text-3xl font-bold text-red-600 mb-4">{character.name}</h1>
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/3">
              <Image
                alt={character.name}
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
            <div className="md:ml-4">
              <p className="text-lg text-gray-600 mb-4">{character.description}</p>
              <p className="text-lg text-gray-600 mb-4">Comics: {character.comics.available}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterDetail;
