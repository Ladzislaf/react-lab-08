import React from 'react'
import CommentItem from "./CommentItem"

const CommentsList = ({commentsList, deleteComment, editComment}) => {
    return (
        <div className={'commentsList'}>
            {commentsList.map((comment) => {
                return (
                    <CommentItem key={comment.id} commentInfo={comment} deleteComment={deleteComment} editComment={editComment}/>
                )
            })}
        </div>
    )
}

export default CommentsList