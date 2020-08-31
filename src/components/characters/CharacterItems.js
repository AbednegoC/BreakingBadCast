import React from 'react'

// Passing in a 'character' and 'death' as props
const CharacterItems = ({ character, death}) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={character.img} alt='Actor Portrait' />
                </div>
                <div className='card-back'>
                    <h1>{character.name}</h1>
                    <ul>
                        <li><strong>Actor Name: </strong>{character.portrayed}</li>
                        <li><strong>Nickname: </strong>{character.nickname}</li>
                        <li><strong>Status: </strong>{character.status}</li>
                        <li><strong>Occupation: </strong>{character.occupation.join(', ')}</li>
                        {/* <li><strong>Death: </strong>{death.cause}</li> */}
                    </ul>
                </div>
            </div>
        </div>
       
    )
}

export default CharacterItems
