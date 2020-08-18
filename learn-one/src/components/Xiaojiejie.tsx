import React from "react";

export interface Props {}

export interface State {
  val: string;
  list: Array<any>;
}

class Xiaojiejie extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      val: "",
      list: ["anmo", "jingyou"],
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
      ...this.state,
      list,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <input
            type="text"
            value={this.state.val}
            onChange={this.inputChange}
          />
          <button onClick={this.add}>123</button>
          <ul>
            {this.state.list.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <div>{this.state.val}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Xiaojiejie;
