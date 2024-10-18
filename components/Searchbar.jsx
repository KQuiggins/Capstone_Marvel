'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function MarvelSearchBar({ onSearchChange }) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();
		onSearchChange(searchTerm);
	};

	return (
		<form
			onSubmit={handleSearch}
			className='flex w-full max-w-sm items-center space-x-2'
		>
			<Input
				type='text'
				placeholder='Search Marvel characters...'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				className="bg-red-50 border-red-200 focus:border-red-500 focus:ring-red-500 text-black"
			/>
			<Button
				type='submit'
				className="bg-white hover:bg-gray-200 text-red-600 border border-red-600"
			>
				<Search className='mr-2 h-4 w-4' />
				Search
			</Button>
		</form>
	);
}
