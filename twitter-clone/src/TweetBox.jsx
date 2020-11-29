import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './TweetBox.css'
import db from './firebase';

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        db.collection('post').add({
            displayName: 'aaa',
            username: 'xxx',
            verified: false,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://apic.douyucdn.cn/upload/avanew/face/201709/20/15/12a9960822a6d2f5fe9238d385bc493a_middle.jpg'
        })

        setTweetMessage('')
        setTweetImage('')
    }

    return (
        <div className='tweetBox '>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src=""></Avatar>
                    <input 
                    onChange={e=>setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="what's happening?" 
                    type='text'
                    ></input>
                </div>
                <input 
                value={tweetImage}
                onChange={e=>setTweetImage(e.target.value)}
                className='tweetBox__imageInput' 
                placeholder="Enter image URL?" 
                type='text'></input>
                <Button onClick={sendTweet} type='submit' className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
