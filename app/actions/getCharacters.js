'use server'

import generateMarvelAuth from '@/utils/marvelAuth';

/**
 * Fetch Marvel characters from the Marvel API.
 *
 * @param {number} [offset=0] - The offset of the starting character.
 * @param {number} [limit=20] - The number of characters to fetch.
 * @param {string} [query=''] - Search query to filter characters by name.
 * @returns {Promise<Array>} A promise that resolves to an array of character objects.
 */

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
