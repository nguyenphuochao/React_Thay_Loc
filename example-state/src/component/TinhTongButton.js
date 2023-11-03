import React, { Component } from 'react';

class TinhTongButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            soA: '',
            soB: '',
            ketQua: ''
        }

    }
    changeInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    tong() {
        const num = Number(this.state.soA) + Number(this.state.soB);
        this.setState({ ketQua: num })
    }
    render() {
        return (
            <div>
                Số A : <input type="text" name="soA" value={this.state.soA} onChange={(e) => this.changeInput(e)} /> <br />
                Số B : <input type="text" name="soB" value={this.state.soB} onChange={(e) => this.changeInput(e)} /> <br />
                Kết quả : <span>{this.state.ketQua}</span> <br />
                <button onClick={() => this.tong()}>Tính Tổng</button>
            </div>
        );
    }
}

export default TinhTongButton;