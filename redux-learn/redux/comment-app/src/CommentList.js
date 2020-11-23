import React, { Component } from "react";
import Comment from "./Comment";
import PropTypes from 'prop-types';

class CommentList extends Component {
  static defaultProps = {
    comments: [],
  }
  constructor(props) {
    super(props);
  }

  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    const { comments } = this.props;
    console.log(comments);
    return (
      <div>
        {comments.map((comment, i) => (
          <Comment comment={comment} key={i} index={i} onDeleteComment={this.onDeleteComment.bind(this)}></Comment>
        ))}
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array,
  onDeleteComment: PropTypes.func
}

export default CommentList;
