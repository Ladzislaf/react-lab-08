import React, {useState} from 'react'

const CommentItem = ({commentInfo, deleteComment, editComment}) => {
    const [info, setInfo] = useState('')

    const showInfo = () => {
        if (info === '')
            setInfo(
                ' username: ' + commentInfo.userName + ', '
                + 'email: ' + commentInfo.email + ', '
                + 'date: ' + commentInfo.date.toLocaleString() + '.'
            )
        else setInfo('')
    }

    return (
        <div className={'commentItem'}>
            <h4>{commentInfo.userName}</h4>
            <img src={commentInfo.image} alt="" style={{width: '100px'}}/>
            <p>{commentInfo.text}</p>
            <button onClick={() => editComment(commentInfo.date)}>change</button>
            <button onClick={() => deleteComment(commentInfo.secretWord)}>delete</button>
            <button onClick={showInfo}>info</button> <br/>
            {info}
        </div>
    )
}

export default CommentItem