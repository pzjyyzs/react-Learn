import * as React from "react";
import { Component } from "react";

export interface XiaojiejieItemProps {
  aa: any;
  delete: (index: number) => void;
  index: number;
}

export interface XiaojiejieItemState {}

class XiaojiejieItem extends React.Component<
  XiaojiejieItemProps,
  XiaojiejieItemState
> {
  constructor(props: XiaojiejieItemProps) {
    super(props);
  }
  delete = () => {
    this.props.delete(this.props.index);
  };
  render() {
    return <li onClick={this.delete}>{this.props.aa}</li>;
  }
}

export default XiaojiejieItem;
