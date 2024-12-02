import { Shield, Zap, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Link from 'next/link';

const AboutPage = () => {
	return (
		<>
		<Header />
		<div className='min-h-screen bg-gradient-to-br from-red-700 via-red-500 to-pink-500 text-gray-100 flex items-center justify-center p-4'>
			<div className='max-w-3xl bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-2xl p-8 border border-red-300'>
				<h1 className='text-4xl font-bold mb-6 text-center text-red-300'>
					About Marvel Gallery
				</h1>
				<div className='flex justify-center space-x-4 mb-6'>
					<Shield className='w-8 h-8 text-red-300' />
					<Zap className='w-8 h-8 text-yellow-300' />
					<BookOpen className='w-8 h-8 text-blue-300' />
				</div>
				<div className='space-y-4 text-lg leading-relaxed'>
					<p>
						Welcome to Marvel Gallery! This application was created
						as a Capstone assignment for Code Louisville, combining
						my love for coding with my admiration for Marvel's
						incredible universe.
					</p>
					<p>
						Marvel Gallery allows users to search and explore their
						favorite Marvel characters, accessing detailed
						information on each hero, villain, or iconic figure. By
						fetching data from the official Marvel API, the app
						provides a comprehensive view of the Marvel Universe,
						including how many comics each character has appeared in
						and the specific titles they've been featured in.
					</p>
					<p>
						Whether you're a long-time Marvel fan or new to the
						universe, Marvel Gallery is designed to make discovering
						and learning about Marvel characters easy, interactive,
						and fun. Dive in and explore the rich stories that have
						captivated fans around the world!
					</p>
				</div>
				<div className='mt-8 text-center'>
                <Link href='/gallery'>
					<span
						
						className='inline-block bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg'
					>
						Explore Characters
					</span>
                    </Link>
				</div>
			</div>
		</div>
	</>
	);
};

export default AboutPage;
