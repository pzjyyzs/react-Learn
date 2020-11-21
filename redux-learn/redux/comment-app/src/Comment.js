import React, { Component } from "react";

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }
  constructor(props) {
    super(props);
    this.state = { timeString: '' }
  }

  componentWillMount() {
    this._updateTimeString()
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }

  _updateTimeString() {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString: duration > 60
      ? `${Math.round(duration / 60)} 分钟前`
      : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  handleDeleteComment() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  render() {
    const { comment } = this.props;
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{comment.username} </span>：
        </div>
        <p>{comment.content}</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span onClick={this.handleDeleteComment.bind(this)} className='comment-delete'>
          删除
        </span>
      </div>
    );
  }
}

export default Comment;
