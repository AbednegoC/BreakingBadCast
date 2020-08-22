// Using react hooks to create functional components: 1) useState is used within our functional components. 2) useEffect is used to trigger when a component loads to make a HTTP req to get our data (i.e: name, img, etc.)

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/UI/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/UI/Search'
import ShowInfo from './components/UI/ShowInfo'
import './App.css'


const App = () => {

  // UseState [Characters] --> Our Breaking Bad characters from API. setChars --> funct () we use to manipulate our state.
  const [characters, setCharacters] = useState([])

  // Represents/Checks whether our API data is loading & has loaded. 
  const [isLoading, setIsLoading] = useState(true)

  // Represents whatever our current 'Search' query is (aka whatever we type in the Search form).
  const [query, setQuery] = useState('')

  // Make a request using axios:
  useEffect(() => {
    const fetchItems = async () => {

      // What we receive from our axios request:
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      // Set result.data to our 'characters' state (i.e: setCharacters)
      setCharacters(result.data)
      // SetIsLoading to 'false' now that we have recieved our API data & it is loaded.
      setIsLoading(false)
    }
    // Actually get our request data:
    fetchItems()

  }, [query]) // [query] is a dependency that constantly updates our Search query w/ the help of our getQuery() + props

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <ShowInfo />
      <CharacterGrid isLoading={isLoading} characters={characters} /> 
    </div>
  )
}

export default App;
