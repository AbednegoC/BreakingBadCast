// Using 'useState' since our search component uses a form and every input in the form usually has its own state.
import React, { useState } from 'react'

const Search = ({ getQuery }) => {

    // Create our local piece of state:
    const [text, setText] = useState('')
    
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        //  Simple form:
        <section className='search'>
            <form>
                {/* 'input' is a control component, which is why we have an 'onChange' event in the form */}
                {/* onChange will trigger whenever something is typed/deleted in form */}
                <input
                    type='text'
                    className='form-control'
                    placeholder=' 🔍 Search a character...'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>

           <section className='warning'>
               <h4>* Warning: this site contains spoilers! *</h4>
           </section>

        </section>
       
    )
}

export default Search
