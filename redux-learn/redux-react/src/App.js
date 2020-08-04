import React from 'react';
import './App.css';
import { connect } from 'react-redux';
class App extends React.Component {
  constructor(props) {
    super()
  }
  add1() {
    this.props.onAdd1()
  }
  add2() {
    this.props.onAdd2()
  }
  add3() {
    this.props.onAdd3()
  }
  add4() {
    this.props.onAdd4()
  }
  render() {
    return (
      <div>
        click <span id="value">{this.props.n}</span> 次
        <div>
          <button id="add1" onClick={this.props.add1.bind(this)}>+1</button>
          <button id="minus1" onClick={this.add2.bind(this)}>+2</button>
          <button id="add1ifodd" onClick={this.add3.bind(this)}>单数+1</button>
          <button id="add1after2s" onClick={this.add4.bind(this)}>两秒钟后实现+1</button>
        </div>
      </div>
    )
  }
}

function x(state) {
  return {
    n: state.n
  }
}

const y = {

  add1: () => {
    return { type: 'add', payload: 1 }
  }

}
export default connect(x, y)(App);
