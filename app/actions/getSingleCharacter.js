
'use server'

import generateMarvelAuth from '@/utils/marvelAuth'

/**
 * Fetches a Marvel character by ID.
 *
 * @param {string} id - The ID of the Marvel character to fetch.
 * @returns {Promise<Object|null>} The Marvel character data or null if an error occurs.
 */

export async function fetchMarvelCharacterById(id) {
  const { publicKey, hash, ts } = generateMarvelAuth()
  const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`

  try {
    const response = await fetch(url)
    

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Marvel API Error:', errorData)
      throw new Error(`Marvel API Error: ${errorData.status}`)
    }

    const data = await response.json()
   
    return data.data.results[0] // Return the first result, which is the character
  } catch (error) {
    console.error('Error fetching Marvel character by id:', error)
    return null
  }
}
