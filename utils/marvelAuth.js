import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

function generateMarvelAuth() {
	const timestamp = Math.floor(Date.now() / 1000); // Get the current time in seconds
	const publicKey = process.env.PUBLIC_MARVEL_KEY;
	const privateKey = process.env.PRIVATE_MARVEL_KEY;

	if (!publicKey || !privateKey) {
		throw new Error(
			'Public or private API keys are missing in the environment variables.',
		);
	}

	// Generate the MD5 hash by concatenating the timestamp, private key, and public key
	const hash = crypto
		.createHash('md5')
		.update(timestamp + privateKey + publicKey)
		.digest('hex');

	// Return the timestamp and hash for sending with your API request
	return {
		timestamp,
		hash, 
        publicKey
	};

    return 
}



export default generateMarvelAuth;
