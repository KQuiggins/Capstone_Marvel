import { fetchMarvelCharacterById } from '@/app/actions/getSingleCharacter';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { BookOpen } from 'lucide-react';

/**
 * Renders the Marvel character detail page as a React Server Component.
 *
 * @async
 * @param {object} props - The component props.
 * @param {object} props.params - The route parameters containing the character ID.
 * @param {string} props.params.id - The ID of the Marvel character to fetch.
 * @returns {Promise<JSX.Element>} The character detail page or an error message if data fetch fails.
 */

export default async function CharacterDetailPage({ params }) {
	const { id } = params;

	const character = await fetchMarvelCharacterById(id);

	// Check if thumbnail is unavailable and set a placeholder
	const isImageUnavailable =
		character.thumbnail?.path?.includes('image_not_available') ||
		!character.thumbnail;
	const imageUrl = isImageUnavailable
		? '/images/placeholder.jpg'
		: `${character.thumbnail.path}.${character.thumbnail.extension}`;

	if (!character) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<p className='text-2xl font-bold text-red-600'>
					Character not found or failed to fetch data.
				</p>
			</div>
		);
	}

	return (
		<div className='container mx-auto px-4 py-8'>
			<Card className='bg-gray-900 text-white border-red-600 border-2'>
				<CardHeader className='flex flex-col md:flex-row items-center gap-6'>
					<div className='w-64 h-64 rounded-full overflow-hidden border-4 border-red-600 shadow-lg shadow-red-600/50'>
						<img
							src={imageUrl}
							alt={character.name}
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='text-center md:text-left'>
						<CardTitle className='text-4xl font-extrabold text-red-600 mb-2'>
							{character.name}
						</CardTitle>
						<CardDescription className='text-lg text-gray-300'>
							{character.description ||
								'No description available'}
						</CardDescription>
					</div>
				</CardHeader>
				<CardContent>
					<h2 className='text-2xl font-bold text-red-600 mb-4 flex items-center'>
						<BookOpen className='mr-2' />
						Comics Appearances
					</h2>
					<ScrollArea className='h-[300px] w-full rounded-md border border-red-600 p-4'>
						{character.comics.items.length > 0 ? (
							<ul className='space-y-2'>
								{character.comics.items.map((comic, index) => (
									<li key={index}>
										<p className='text-lg font-semibold'>
											{comic.name}
										</p>
										<Separator className='my-2 bg-red-600/30' />
									</li>
								))}
							</ul>
						) : (
							<p className='text-gray-400'>
								No comics available for this character.
							</p>
						)}
					</ScrollArea>
				</CardContent>
			</Card>
		</div>
	);
}
