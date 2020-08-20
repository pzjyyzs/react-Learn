import * as React from "react";
import { Component } from "react";

export interface LikeProps {}

export interface LikeState {}

class Like extends React.Component<LikeProps, LikeState> {
  render() {
    return <i className="fa fa-heart-o" aria-hidden="true"></i>;
  }
}

export default Like;
