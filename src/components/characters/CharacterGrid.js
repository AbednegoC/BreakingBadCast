import React from 'react'
import CharacterItems from './CharacterItems'
import Spinner from '../UI/Spinner'

// Passing in our characters and isLoading as props
const CharacterGrid = ({ characters, isLoading, charDeath}) => {
    return isLoading ? (
        <Spinner />
    ) : (
            <section className='cards'>
                {characters.map((character) => (
                    <CharacterItems key={character.char_id} character={character}></CharacterItems>
                ))}
            </section>
        )
}

export default CharacterGrid 
