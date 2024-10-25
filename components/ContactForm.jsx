'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { submitContactForm } from '@/app/actions/submitContactForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await submitContactForm(formData);
		if (response.status === 'success') {
			toast.success('Message sent successfully!');
			setFormData({
				name: '',
				email: '',
				message: '',
			});
		} else {
			toast.error('An error occurred. Please try again later.');
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-r red-700 via-red-800 to-black'>
			<div className='w-full max-w-md p-8 bg-white shadow-lg rounded-lg'>
				<h1 className='text-2xl font-bold text-center mb-4 font-marvel_header text-red-400'>
					Contact Us
				</h1>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label
							htmlFor='name'
							className='block text-lg font-medium text-red-700 font-marvel_cursive'
						>
							Name
						</label>
						<Input
							type='text'
							name='name'
							id='name'
							value={formData.name}
							onChange={handleChange}
							className='mt-1 block w-full p-2 border border-red-300 rounded-md shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none'
							required
						/>
					</div>

					<div>
						<label
							htmlFor='email'
							className='block font-medium text-red-700 font-marvel_cursive text-lg'
						>
							Email
						</label>
						<Input
							type='email'
							name='email'
							id='email'
							value={formData.email}
							onChange={handleChange}
							className='mt-1 block w-full p-2 border border-red-300 rounded-md shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-500'
							required
						/>
					</div>

					<div>
						<label
							htmlFor='message'
							className='block text-lg font-medium text-red-700 font-marvel_cursive'
						>
							Message
						</label>
						<textarea
							name='message'
							id='message'
							value={formData.message}
							onChange={handleChange}
							className='mt-1 block w-full p-2 border border-red-300 rounded-md shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none'
							rows='4'
							required
						/>
					</div>

					<Button
						type='submit'
						className='w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg'
					>
						Submit
					</Button>
				</form>
				<ToastContainer />
			</div>
		</div>
	);
};

export default ContactForm;
