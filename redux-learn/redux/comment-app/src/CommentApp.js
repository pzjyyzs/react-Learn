import React, { Component } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  handleSubmitComment(comment) {
    const newComments = [].concat(this.state.comments).push(comment);
    this.setState({
      comments: newComments,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput
          onSubmit={this.handleSubmitComment.bind(this)}
        ></CommentInput>
        <CommentList comments={this.state.comments}></CommentList>
      </div>
    );
  }
}

export default CommentApp;
