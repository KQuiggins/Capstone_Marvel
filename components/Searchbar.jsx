'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';


/**
 * MarvelSearchBar component for the Marvel Explorer application.
 * 
 * This component provides a search bar for filtering Marvel characters. It takes a callback
 * function as a prop to notify the parent component when the search term changes.
 * 
 * @component
 * @param {Object} props - The props object.
 * @param {function} props.onSearchChange - Callback function invoked with the search term 
 * when the form is submitted.
 * @returns {JSX.Element} The MarvelSearchBar component.
 */
export default function MarvelSearchBar({ onSearchChange }) {
	/**
	 * State to store the search term entered by the user.
	 * @type {string}
	 */
	const [searchTerm, setSearchTerm] = useState('');

	/**
	 * Handles the form submission event and invokes the callback function with the search term.
	 * Prevents the default form submission behavior and calls the onSearchChange 
     * callback with the current search term.
	 * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
	 */
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
