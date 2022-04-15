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
            <p className={'textField'}>{commentInfo.text}</p>
            <button onClick={() => editComment(commentInfo.date)}>change</button>
            <button onClick={() => deleteComment(commentInfo)}>delete</button>
            <button onClick={showInfo}>info</button> <br/>
            {info}
        </div>
    )
}

export default CommentItem