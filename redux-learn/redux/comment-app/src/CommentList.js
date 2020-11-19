import React, { Component } from "react";
import Comment from "./Comment";

class CommentList extends Component {
  static defaultProps = {
    comments: [],
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { comments } = this.props;
    console.log(comments);
    return (
      <div>
        {comments.map((comment, i) => (
          <Comment comment={comment} key={i}></Comment>
        ))}
      </div>
    );
  }
}

export default CommentList;
