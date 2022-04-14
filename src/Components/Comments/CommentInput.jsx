import React from 'react'

const CommentInput = () => {
    return (
        <form className={"inputForm"}>
            <h3 style={{textAlign: "center"}}>Comment inputs</h3>
            <label>
                Input name
                <input name={'userName'} type="text"/>
            </label><br/>
            <label>
                Select image
                <select name="userImage" id="">
                    <option value="https://thumbnailer.mixcloud.com/unsafe/900x900/extaudio/a/f/8/6/7c93-1ff4-4e00-ab21-1521a78bb9ab">marshmallow</option>
                    <option value="https://imageproxy.ifunny.co/noop/user_photos/6e77031171d1f6f118b083fea6df0aefc66927e2_0.jpg%3F1431832546">creeper</option>
                    <option value="https://pixelbox.ru/wp-content/uploads/2021/06/ava-steam-anime-tyan-94.jpg">anime girl</option>
                </select>
            </label><br/>
            <label>
                Input email
                <input name={'userEmail'} type="text"/>
            </label><br/>
            <label>
                Type your comment <br/>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </label><br/>
            <label>
                Secret word for deleting?
                <input name={'secretWord'} type="text"/>
            </label><br/>
        </form>
    )
}

export default CommentInput