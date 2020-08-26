import * as React from "react";
import { Component } from "react";

export interface LoginFormProps {}

export interface LoginFormState {}

class LoginForm extends Component<LoginFormProps, LoginFormState> {
  username = React.createRef() as any;
  handleSubmit = (e: any) => {
    e.preventDefault();

    const username = this.username.current.value;
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={() => this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
