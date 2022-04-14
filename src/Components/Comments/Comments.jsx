import React, {useEffect, useState} from 'react'
import CommentsList from "./CommentsList"
import CommentInput from "./CommentInput"

// todo add change function for comment
// Функция изменения, компонент СommentsEdit, должна содержать поле для изменения
// текста сообщения и данные об изменяемом комментарии. Поле «Дата изменения» должно
// изменить свое значение после редактирования комментария. Другие поля уже опубликованного
// комментария должны быть неизменны.

// todo изменить компонент ввода почты на тот, что из прошлых лаб

// todo сделать запрет на добавление комментариев без name, text, secret word и с некорректной почтой

// todo сделать нормальные стили

const Comments = () => {
    const [commentsList, setCommentsList] = useState([])

    const addNewComment = (e, newComment, setComment) => {
        e.preventDefault()
        setCommentsList([...commentsList, {...newComment, id: Date.now(), date: new Date()}])
        // clear inputs values
        setComment({userName: '', email: '', image: '', text: '', secretWord: '',})
    }

    const deleteComment = (secretWord) => {
        let answer = prompt('Input a secret word for this comment')
        for (let i = 0; i < commentsList.length; i++) {
            if (commentsList[i].secretWord === secretWord && secretWord === answer) {
                let copy = commentsList.slice()
                copy.splice(i, 1)
                setCommentsList(copy)
                alert('Comment deleted!')
                return
            }
        }
        alert('Incorrect secret word!')
    }

    const editComment = () => {

    }

    useEffect(() => {
        console.log(commentsList)
    }, [commentsList])

    return (
        <div className={'commentsContainer'}>
            <CommentsList commentsList={commentsList} deleteComment={deleteComment} editComment={editComment}/>
            <CommentInput addNewComment={addNewComment}/>
        </div>
    )
}

export default Comments