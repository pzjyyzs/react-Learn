import * as React from "react";
import { Component } from "react";
import Input from "../common/input";
import Joi from "joi";

export interface LoginFormProps {}

export interface LoginFormState {}

class LoginForm extends Component<LoginFormProps, LoginFormState> {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  /* username = React.createRef() as any; */

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };
  validate = () => {
    (Joi as any).validate(this.state.account, this.schema);
    const errors: any = {};

    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is required.";
    }
    if (account.password.trim() === "") {
      errors.password = "password is required.";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e: any) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    // const username = this.username.current.value;
  };

  validateProperty = (input: any) => {
    return "";
  };

  handleChange = ({ currentTarget: input }: any) => {
    const errors: any = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    const account: any = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={(errors as any).username}
          ></Input>
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={(errors as any).password}
          ></Input>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
