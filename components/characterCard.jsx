import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


export default function CharacterCard({
	id,
	name = 'Iron Man',
	description = 'Genius inventor Tony Stark creates a suit of armor that gives him superhuman abilities and turns him into the technologically advanced superhero Iron Man.',
	imageUrl = '/images/iron-man.jpg',
	comicsCount = 2678,
}) {
	

	// Check if the imageUrl contains 'image_not_available', and fallback to placeholder
	const isImageUnavailable = imageUrl.includes('image_not_available');
	const displayImageUrl = isImageUnavailable
		? '/images/placeholder.jpg'
		: imageUrl;

	

	return (
		<div className='px-4'>
			<Card className='w-full max-w-sm mx-auto overflow-hidden'>
				<CardHeader className='p-0'>
					<div className='relative w-full pt-[100%]'>
						<Image
							alt={name}
							src={displayImageUrl}
							width={250}
							height={250}
							priority={true}
							className='absolute top-0 left-0 w-full h-full object-contain'
						/>
					</div>
				</CardHeader>
				<CardContent className='p-4'>
					<h3 className='text-2xl font-bold text-red-600 mb-2'>
						{name}
					</h3>
					<p className='text-sm text-gray-600 mb-4'>{description}</p>
					<Badge variant='secondary' className='mb-2'>
						{comicsCount} Comics
					</Badge>
				</CardContent>
				<CardFooter className='p-4 pt-0'>
					<Link href={`/character/${id}`} className='w-full'>
						<Button className='w-full bg-red-600 hover:bg-red-700'>
							Learn More
							<Info className='ml-2 h-4 w-4' />
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
