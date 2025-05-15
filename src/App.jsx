import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [chars, setChar] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(({ data }) => {
        setChar(data.results)
      })
  }, [])

  return (
    <div className='flex flex-wrap gap-3 justify-center'>
      {chars.map((char, idx) =>
        <div key={idx} className='text-center flex flex-col gap-3 p-3 shadow-md rounded'>
          <img src={char.image} alt={char.name} />
          <div className='text-xl font-semi-bold'>{char.name}</div>
        </div>
      )}
    </div>
  )
}

export default App
