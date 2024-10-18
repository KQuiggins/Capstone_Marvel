'use server'

import generateMarvelAuth from '@/utils/marvelAuth';

export async function fetchMarvelCharacters(offset = 0, limit = 20, query = '') {
  const { publicKey, hash, ts } = generateMarvelAuth();
  let url = `https://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  if (query) {
    url += `&nameStartsWith=${query}`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Marvel API Error:', errorData);
      throw new Error(`Marvel API Error: ${errorData.status}`);
    }

    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error('Error fetching Marvel characters:', error);
    return [];
  }
}
