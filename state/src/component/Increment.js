import React, { Component } from 'react';

class Increment extends Component {
    constructor(props) {
        super(props)
        this.state = { value: 0 }
    }
    f1() {
        this.setState({ value: 5 })
    }
    render() {
        return (
            <div>
                <span>Giá trị: {this.state.value} </span>
                <br />
                <button onClick={() => this.f1()}>Tăng 5 đơn vị</button>
            </div>
        );
    }
}

export default Increment;