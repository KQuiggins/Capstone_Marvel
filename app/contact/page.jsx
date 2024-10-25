'use client';
import ContactForm from '@/components/ContactForm';
import { ToastContainer } from 'react-toastify';

const ContactPage = () => {
	return (
		<>
			<ContactForm />
			<ToastContainer />
		</>
	);
};

export default ContactPage;
