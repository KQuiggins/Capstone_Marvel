'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchMarvelCharacters } from '@/app/actions/getCharacters';
import CharacterCard from '@/components/characterCard';
import MarvelSearchBar from './Searchbar';
import { Button } from '@/components/ui/button';
import Spinner from './Spinner';
import Head from 'next/head';

/**
 * MarvelGallery Component
 *
 * This component renders a paginated gallery of Marvel characters with a search bar.
 * It fetches character data from the Marvel API and displays it in a grid format.
 *
 * @component
 * @returns {JSX.Element} The MarvelGallery component.
 */
export default function MarvelGallery() {
	/**
	 * State to store the list of characters fetched from the Marvel API.
	 * @type {Array<Object>}
	 */
	const [characters, setCharacters] = useState([]);

	/**
	 * State to store the search query entered by the user.
	 * @type {string}
	 * @default ''
	 */
	const [searchQuery, setSearchQuery] = useState('');

	/**
	 * State to store the loading status of the component.
	 * @type {boolean}
	 * @default false
	 */
	const [loading, setLoading] = useState(false);

	/**
	 * State to store any errors that occur during data fetching.
	 * @type {string|null}
	 * @default null
	 */
	const [error, setError] = useState(null);

	/**
	 * State to store the current page number of the gallery.
	 * @type {number}
	 * @default 1
	 */

	/**
	 * State to store the current page number of the gallery.
	 * @type {number}
	 * @default 1
	 */
	const [page, setPage] = useState(1);

	/**
	 * Constant to define the number of characters fetched per page.
	 * @type {number}
	 */
	const limit = 20;

	/**
	 * Fetches and updates the list of Marvel characters based on the current page and search query.
	 *
	 * @async
	 * @function loadCharacters
	 */
	useEffect(() => {
		const loadCharacters = async () => {
			setLoading(true);
			const offset = (page - 1) * limit;
			try {
				/**
				 * Fetch characters from the Marvel API.
				 * @type {Array<Object>}
				 */
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

	/**
	 * Handles navigating to the next page.
	 *
	 * @function handleNext
	 */
	const handleNext = () => setPage((prevPage) => prevPage + 1);

	/**
	 * Handles navigating to the previous page.
	 *
	 * @function handlePrev
	 */
	const handlePrev = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

	/**
	 * Updates the search query state.
	 *
	 * @function handleSearchChange
	 * @param {string} query - The new search query.
	 */
	const handleSearchChange = (query) => setSearchQuery(query);

	if (error) return <p>{error}</p>;

	return (
		<>
			<Head>
				<title>Marvel Characters</title>
			</Head>
			<div className='flex flex-col min-h-screen'>
				<header className='bg-red-600 text-white py-4'>
					<div className='flex justify-between items-center max-w-7xl mx-auto px-4'>
						<Link href='/'>
							<Button className='text-white bg-transparent border border-white hover:bg-red-700'>
								Home
							</Button>
						</Link>

						<div className='flex'>
							<MarvelSearchBar
								onSearchChange={handleSearchChange}
							/>
						</div>
					</div>
				</header>

				<main className='flex-grow'>
					{loading ? (
						<div className='flex justify-center items-center h-full'>
							<Spinner loading={loading} />
						</div>
					) : (
						<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4'>
							{characters.map((character) => (
								<div
									key={character.id}
									className='w-full max-w-sm mx-auto overflow-hidden'
								>
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
		</>
	);
}
