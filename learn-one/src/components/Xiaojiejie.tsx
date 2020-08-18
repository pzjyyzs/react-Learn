import React from "react";

export interface Props {}

export interface State {}

class Xiaojiejie extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <div>
          <input type="text" />
          <button>123</button>
          <ul>
            <li>anmo</li>
            <li>jingyou</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Xiaojiejie;
