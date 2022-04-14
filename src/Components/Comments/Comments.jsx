import React from 'react'
import CommentsList from "./CommentsList"
import CommentInput from "./CommentInput"

const Comments = () => {
    return (
        <div className={'commentsContainer'}>
            <CommentsList/>
            <CommentInput/>
        </div>
    )
}

export default Comments