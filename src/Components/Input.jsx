import React from 'react'

const Input = ({title, ...props}) => {
    return (
        <label>
            {title}: <br/>
            <input className={"refactoredInput"} {...props}/>
        </label>
    )
}

export default Input