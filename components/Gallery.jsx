'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchMarvelCharacters } from '@/app/actions/getCharacters';
import CharacterCard from '@/components/characterCard';
import MarvelSearchBar from './Searchbar';
import { Button } from '@/components/ui/button';
import Spinner from './Spinner';

export default function MarvelGallery() {
	const [characters, setCharacters] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(1);
	const limit = 20;

	useEffect(() => {
		const loadCharacters = async () => {
			setLoading(true);
			const offset = (page - 1) * limit;
			try {
				const fetchedCharacters = await fetchMarvelCharacters(
					offset,
					limit,
					searchQuery,
				);
				if (!fetchedCharacters) {
					setError('Failed to load characters');
					return;
				}
				setCharacters(fetchedCharacters);
			} catch (error) {
				setError('Failed to load characters');
			} finally {
				setLoading(false);
			}
		};

		loadCharacters();
	}, [page, searchQuery]);

	const handleNext = () => setPage((prevPage) => prevPage + 1);
	const handlePrev = () => setPage((prevPage) => Math.max(prevPage - 1, 1));
	const handleSearchChange = (query) => setSearchQuery(query);

	if (error) return <p>{error}</p>;

	return (
		<div className='flex flex-col min-h-screen'>
			<header className='bg-red-600 text-white py-4'>
				<div className='flex justify-between items-center max-w-7xl mx-auto px-4'>
					<Link href='/'>
						<Button className='text-white bg-transparent border border-white hover:bg-red-700'>
							Home
						</Button>
					</Link>

					<div className='flex'>
						<MarvelSearchBar onSearchChange={handleSearchChange} />
					</div>
				</div>
			</header>


      <main className="flex-grow">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner loading={loading} />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {characters.map(character => (
              <div key={character.id} className="w-full max-w-sm mx-auto overflow-hidden">
                <CharacterCard
                  id={character.id}
                  name={character.name}
                  description={character.description}
                  imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  comicsCount={character.comics.available}
                />
              </div>
            ))}
          </div>
        )}
      </main>

			

			<footer className='bg-red-600 text-white py-4'>
				<div className='flex justify-between mx-auto max-w-2xl px-4'>
					<Button
						onClick={handlePrev}
						disabled={page === 1 || loading}
						variant='default'
						size='default'
					>
						Prev
					</Button>
					<span className='px-4 py-2'>Page {page}</span>
					<Button
						onClick={handleNext}
						disabled={loading}
						variant='default'
						size='default'
					>
						Next
					</Button>
				</div>
			</footer>
		</div>
	);
}
