import React, {useState} from 'react'
import Input from "../Input";

import marshImage from '../../img/marsh.jpg'
import creeperImage from '../../img/creeper.jpg'
import animeImage from '../../img/anime.jpg'

const CommentInput = ({addNewComment}) => {
    const [comment, setComment] = useState({userName: '', email: '', image: '', text: '', secretWord: '',})

    return (
        <form className={"inputForm"}>
            <h3 style={{textAlign: "center"}}>Comment inputs</h3>
            <Input name={'userName'} type="text" placeholder={'user name'} title={'User name'} value={comment.userName}
                   onChange={(e) => setComment({...comment, userName: e.target.value})}/><br/>
            <Input name={'userEmail'} type="text" placeholder={'email'} title={'Input email'} value={comment.email}
                   onChange={(e) => setComment({...comment, email: e.target.value})}/><br/>
            <label>
                Select image: <br/>
                <select name="userImage" defaultValue={'default'}
                        onChange={(e) => setComment({...comment, image: e.target.value})}>
                    <option value="default" disabled hidden>Choose image</option>
                    <option value={marshImage}>marshmallow</option>
                    <option value={creeperImage}>creeper</option>
                    <option value={animeImage}>anime girl</option>
                </select>
            </label><br/>
            <label>
                Type your comment <br/>
                <textarea cols="50" rows="3" style={{fontSize: '20px'}} value={comment.text}
                          onChange={(e) => setComment({...comment, text: e.target.value})}></textarea>
            </label><br/>
            <Input name={'secretWord'} type="text" placeholder={'secret word'} title={'Secret word for deleting?'}
                   value={comment.secretWord}
                   onChange={(e) => setComment({...comment, secretWord: e.target.value})}/><br/>
            <button onClick={(e) => addNewComment(e, comment, setComment)}>Add new comment</button>
        </form>
    )
}

export default CommentInput