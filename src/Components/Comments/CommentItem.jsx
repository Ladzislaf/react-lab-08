import React from 'react'

const CommentItem = ({commentInfo}) => {
    return (
        <div className={'commentItem'}>
            {commentInfo.id}
            {commentInfo.userName}
            <div>
                {commentInfo.text}
            </div>
        </div>
    )
}

export default CommentItem