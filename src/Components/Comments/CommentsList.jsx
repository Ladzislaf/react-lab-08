import React, {useState} from 'react'
import CommentItem from "./CommentItem"

const CommentsList = () => {
    const [commentsList, setCommetsList] = useState([
        {id: 1, userName: 'Abobus', text: 'video ne ochen yaa schitau'},
        {id: 2, userName: 'Vasya Pupkin', text: 'Nuuu takoe'},
        {id: 3, userName: 'Lololoshka', text: 'Like podpiska'},
    ])

    return (
        <div className={'commentsList'}>
            {commentsList.map((comment) => {
                return <CommentItem key={comment.id} commentInfo={comment}/>
            })}
        </div>
    )
}

export default CommentsList