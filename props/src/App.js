import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// Function component
// function Car(props) {
//   return (
//     <div>Đây là Car màu {props.color} and version {props.version}</div>
//   );
// }

// arrow function
// const Car = (props) => {
//   return (
//     <div>Đây là Car màu {props.color} and version {props.version}</div>
//   );
// }

// class component
class Car extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {/* Dùng this dùng cho class */}
        Đây là Car màu {this.props.color} and version {this.props.version}
      </div>
    );
  }
}

// THành phần cha có dữ liệu
function App() {
  return (
    <div>
      <Car color="red" version="1.0" />
      <Car color="yellow" version="2.0" />
    </div>
  );
}

export default App;
