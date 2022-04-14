import React, {useState} from 'react'

const CommentItem = ({commentInfo, deleteComment, editComment}) => {
    const [info, setInfo] = useState('')

    const showInfo = () => {
        setInfo(
            ' username: ' + commentInfo.userName + ', '
            + 'email: ' + commentInfo.email + ', '
            + 'date: ' + commentInfo.date.toLocaleString() + '.'
        )
    }

    return (
        <div className={'commentItem'}>
            <h4>{commentInfo.userName}</h4>
            <img src={commentInfo.image} alt="" style={{width: '100px'}}/>
            <div>
                {commentInfo.text}
            </div>
            <button onClick={() => editComment}>change</button>
            <button onClick={() => deleteComment(commentInfo.secretWord)}>delete</button>
            <button onClick={showInfo}>info</button>
            {info}
        </div>
    )
}

export default CommentItem