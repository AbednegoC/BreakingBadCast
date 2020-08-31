import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
    // Import and render spinner gif
    return (
        // spinner props
        <img src={spinner} style={{ width: '50px', margin: 'auto', display: 'block' }} alt='Loading...' />
    )
}

export default Spinner
