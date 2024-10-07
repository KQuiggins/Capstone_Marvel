'use client'
import { useEffect, useState } from 'react'
import { fetchMarvelCharacters } from '@/app/actions/getCharacters'
import CharacterCard from '@/components/characterCard'

export default function MarvelGallery() {
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const limit = 20

  useEffect(() => {
    const loadCharacters = async () => {
      const offset = (page - 1) * limit
      const fetchedCharacters = await fetchMarvelCharacters(offset, limit)
      if (!fetchedCharacters) {
        setError('Failed to load characters')
        return
      }
      setCharacters(fetchedCharacters)
    }

    loadCharacters()
  }, [page])

  const handleNext = () => setPage(prevPage => prevPage + 1)
  const handlePrev = () => setPage(prevPage => Math.max(prevPage - 1, 1))

  if (error) return <p>{error}</p>

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {characters.map(character => (
          <div key={character.id} className="w-full max-w-sm mx-auto overflow-hidden">
            <CharacterCard
              name={character.name}
              description={character.description}
              imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              comicsCount={character.comics.available}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  )
}