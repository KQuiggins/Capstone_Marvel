// fetchCharacterById.js
'use server'

import generateMarvelAuth from '@/utils/marvelAuth'

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
    console.log(data.results)
    return data.data.results[0] // Return the first result, which is the character
  } catch (error) {
    console.error('Error fetching Marvel character by id:', error)
    return null
  }
}
