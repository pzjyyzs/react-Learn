import { Avatar } from '@material-ui/core';
import { ChatBubbleOutline, Favorite, Publish, Repeat, VerifiedUser } from '@material-ui/icons';
import React from 'react';
import './Post.css'

const Post = ({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) => {
    return (
        <div className='post'>
            <div className="post__avatar">
                <Avatar src={avatar && avatar}></Avatar>
            </div>
            <div className="post__bodt">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            { displayName }
                            <span>
                                {verified && <VerifiedUser className='post__badge'>@ {username}</VerifiedUser>}
                            </span>
                        </h3>
                    </div>
                    <div className='post_headerDescription'>
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutline fontSize='small'>
                        <Repeat fontSize='small'></Repeat>
                        <Favorite fontSize='small'></Favorite>
                        <Publish fontSize='small'></Publish>
                    </ChatBubbleOutline>
                </div>
            </div>
        </div>
    );
}

export default Post;
