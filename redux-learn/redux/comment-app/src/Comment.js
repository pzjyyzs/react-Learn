import { divide } from "lodash";
import React, { Component } from "react";

class Comment extends Component {
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
      </div>
    );
  }
}

export default Comment;
