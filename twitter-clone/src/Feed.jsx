import React, { useState,useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('post').onSnapshot(snapshot => {
            console.log(snapshot)
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, []);
    return (
        <div className='feed'>
            <div className='feed__header'>
                <h2>Home</h2>
            </div>
            <TweetBox></TweetBox>
            { console.log(posts)}
            { posts.map((post, index) => {
                return <Post
                    displayName={post.displayName}
                    username={post.name}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                    key={index}
                ></Post>
            })}
        </div>
    );
}

export default Feed;
