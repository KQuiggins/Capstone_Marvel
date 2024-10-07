// utils/marvelAuth.js

import crypto from 'crypto';


function generateMarvelAuth() {
  const ts = Date.now().toString(); // Milliseconds since epoch as a string
  const publicKey = process.env.PUBLIC_MARVEL_KEY;
  const privateKey = process.env.PRIVATE_MARVEL_KEY;
  console.log(publicKey, privateKey);
  
  if (!publicKey || !privateKey) {
    throw new Error(
      'Public or private API keys are missing in the environment variables.',
    );
  }

  // Generate the MD5 hash by concatenating the timestamp, private key, and public key
  const hash = crypto
    .createHash('md5')
    .update(ts + privateKey + publicKey)
    .digest('hex');

  // Return the timestamp and hash for sending with your API request
  return {
    ts,
    hash,
    publicKey,
  };
}

export default generateMarvelAuth;
