import React, { Component } from "react";

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      content: "",
    };
    this.textAreaRef = React.createRef();
  }

  componentWillMount() {
    this._loadUsername()
  }

  componentDidMount() {
    this.textAreaRef.current.focus()
  }

  _loadUsername() {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }

  _saveUsername(username) {
    localStorage.setItem('username', username)
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  handleUsernameBlur(event) {
    this._saveUsername(event.target.value)
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content, createTime: +new Date() });
    }
    this.setState({ content: "" });
  }

  render() {
    const { username, content } = this.state;
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={username}
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
            ref={this.textAreaRef}
              value={content}
              onChange={this.handleContentChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
