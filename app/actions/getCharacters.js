

import generateMarvelAuth from '@/utils/marvelAuth';

export async function fetchMarvelCharacters() {
  const { publicKey, hash, ts } = generateMarvelAuth();
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch Marvel characters');
    }
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}