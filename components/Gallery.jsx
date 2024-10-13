'use client'
import { useEffect, useState } from 'react'
import { fetchMarvelCharacters } from '@/app/actions/getCharacters'
import CharacterCard from '@/components/characterCard'
import Spinner from './Spinner'


export default function MarvelGallery() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const limit = 20

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true)
      const offset = (page - 1) * limit
      try {
        const fetchedCharacters = await fetchMarvelCharacters(offset, limit)
        if (!fetchedCharacters) {
          setError('Failed to load characters')
          return
        }
        setCharacters(fetchedCharacters)
      } catch (error) {
        setError('Failed to load characters')
      } finally {
        setLoading(false)
      }
    }

    loadCharacters()
  }, [page])

  const handleNext = () => setPage(prevPage => prevPage + 1)
  const handlePrev = () => setPage(prevPage => Math.max(prevPage - 1, 1))

  if (error) return <p>{error}</p>

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-red-600 text-white py-4 text-center">
        <h1>Marvel Gallery</h1>
      </header>

      <main className="flex-grow">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner loading={loading} />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
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
        )}
      </main>

      <footer className="bg-red-600 text-white py-4">
        <div className="flex justify-between mx-auto max-w-2xl px-4">
          <button
            onClick={handlePrev}
            disabled={page === 1 || loading}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
          >
            Prev
          </button>
          <span className="px-4 py-2">Page {page}</span>
          <button
            onClick={handleNext}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  )
}
