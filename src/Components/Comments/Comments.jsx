import React, {useState} from 'react'
import CommentsList from "./CommentsList"
import CommentInput from "./CommentInput"
import EditCommentInput from "./EditCommentInput"

// todo сделать нормальные стили

const Comments = () => {
    const [commentsList, setCommentsList] = useState([])
    const [showEdit, setShowEdit] = useState(false)
    const [commentToChange, setCommentToChange] = useState({})

    const addNewComment = (e, newComment, setComment, sending) => {
        e.preventDefault()
        if (!sending.email) {
            alert('Input correct email')
            return
        }
        if (sending.userName && sending.text && sending.secretWord) {
            setCommentsList([...commentsList, {...newComment, id: Date.now(), date: new Date()}])
            // clear inputs values
            setComment({...newComment, userName: '', email: '', text: '', secretWord: '',})
        } else {
            alert('You need to set comment values')
        }
    }

    const deleteComment = (commentToDelete) => {
        let answer = prompt('Input a secret word for this comment')
        for (let i = 0; i < commentsList.length; i++) {
            if (commentsList[i].id === commentToDelete.id && commentToDelete.secretWord === answer) {
                let copy = commentsList.slice()
                copy.splice(i, 1)
                setCommentsList(copy)
                alert('Comment deleted!')
                return
            }
        }
        alert('Incorrect secret word!')
    }

    const editComment = (commentDate) => {
        setShowEdit(true)

        for (let i = 0; i < commentsList.length; i++)
            if (commentsList[i].date === commentDate) {
                setCommentToChange(commentsList[i])
            }
    }

    const closeEdit = () => setShowEdit(false)

    const confirmChanging = (newCommentValue) => {
        for (let i = 0; i < commentsList.length; i++)
            if (commentsList[i].id === commentToChange.id) {
                let copy = commentsList.slice()
                copy[i] = {...commentToChange, text: newCommentValue, date: new Date()}
                setCommentsList(copy)
                return
            }
    }

    return (
        <div className={'commentsContainer'}>
            <CommentsList commentsList={commentsList} deleteComment={deleteComment} editComment={editComment}/>
            {showEdit && <EditCommentInput closeEdit={closeEdit} confirmChanging={confirmChanging}/>}
            <CommentInput addNewComment={addNewComment}/>
        </div>
    )
}

export default Comments