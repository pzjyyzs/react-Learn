import React from "react";
import XiaojiejieItem from "./XiaojiejieItem";

export interface Props {}

export interface State {
  val: string;
  list: Array<any>;
  color: string;
}

class Xiaojiejie extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      val: "",
      list: ["anmo", "jingyou"],
      color: "a",
    };
  }

  inputChange = (e: any) => {
    this.setState({
      ...this.state,
      val: e.target.value,
    });
  };
  add = () => {
    let { val, list } = this.state;
    if (list.indexOf(val) === -1) {
      list.push(val);
    }
    this.setState({
      val: "",
      list,
    });
  };
  delete(index: number) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      ...this.state,
      list,
    });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <input
            className={this.state.color}
            type="text"
            value={this.state.val}
            onChange={this.inputChange}
          />
          <button onClick={this.add}>123</button>
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <XiaojiejieItem
                  aa={item}
                  key={item}
                  index={index}
                  delete={() => {
                    this.delete(index);
                  }}
                ></XiaojiejieItem>
              );
            })}
          </ul>
          <div>{this.state.val}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Xiaojiejie;
