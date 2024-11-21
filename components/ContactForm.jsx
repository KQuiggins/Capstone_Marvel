'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { submitContactForm } from '@/app/actions/submitContactForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

/**
 * Renders the contact form and handles form submission.
 *
 * @returns {JSX.Element} The contact form component.
 */

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		message: '',
	});

	/**
	 * Updates the form data state when input fields change.
	 *
	 * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The input change event.
	 */
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	/**
	 * Validates the form data and sets error messages if validation fails.
	 *
	 * @returns {boolean} True if the form data is valid, false otherwise.
	 */
	const validateForm = () => {
		let valid = true;
		const newErrors = {
			name: '',
			email: '',
			message: '',
		};

		if (formData.name.length < 2) {
			newErrors.name = 'Name must be at least 2 characters long.';
			valid = false;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address.';
			valid = false;
		}

		if (formData.message.length < 10) {
			newErrors.message = 'Message must be at least 10 characters long.';
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	/**
	 * Handles form submission, sends data, and shows notifications.
	 *
	 * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
	 */
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			const response = await submitContactForm(formData);
			if (response.status === 'success') {
				toast.success('Message sent successfully!');
				setFormData({
					name: '',
					email: '',
					message: '',
				});
				setErrors({
					name: '',
					email: '',
					message: '',
				});
			} else {
				toast.error('An error occurred. Please try again later.');
			}
		}
	};

	return (
		<>
			<Head>
				<title>Contact Us</title>
			</Head>
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
							{errors.name && (
								<p className='text-red-500 text-sm mt-1'>{errors.name}</p>
							)}
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
							{errors.email && (
								<p className='text-red-500 text-sm mt-1'>{errors.email}</p>
							)}
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
							{errors.message && (
								<p className='text-red-500 text-sm mt-1'>{errors.message}</p>
							)}
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
		</>
	);
};

export default ContactForm;
