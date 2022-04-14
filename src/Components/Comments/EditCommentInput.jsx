import React, {useState} from 'react'

const EditCommentInput = ({closeEdit, confirmChanging}) => {
    const [newCommentValue, setNewCommentValue] = useState('')
    return (
        <div className={'editCommentInput'}>
            <h3 style={{textAlign: 'center'}}>Change comment</h3>
            <textarea cols="100" rows="4" value={newCommentValue} onChange={(e) => setNewCommentValue(e.target.value)}/> <br/>
            <button onClick={closeEdit}>Close</button>
            <button onClick={() => confirmChanging(newCommentValue)}>Confirm</button>
        </div>
    )
}

export default EditCommentInput