import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // tích hợp react bootstrap
import { Form ,Alert} from 'react-bootstrap';
// class component
class TinhTongButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            soA: '',
            soB: '',
            ketQua: ''  
        }
    }
    // Hàm lấy giá trị của input soA và soB
    changeInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    // Hàm tính tổng
    tong() {
        const num = Number(this.state.soA) + Number(this.state.soB);
        this.setState({ ketQua: num })
    }
    render() {
        return (
            <div className='container'>
                <Form.Group controlId="form-soA">
                    <Form.Label>Số A:</Form.Label>
                    <Form.Control type="text" name="soA" value={this.state.soA} onChange={(e) => this.changeInput(e)} />
                </Form.Group>
                <Form.Group controlId="form-soB">
                    <Form.Label>Số B:</Form.Label>
                    <Form.Control type="text" name="soB" value={this.state.soB} onChange={(e) => this.changeInput(e)} />
                </Form.Group>
                <Form.Label>Kết quả:</Form.Label>
                <Alert variant="success">
                    {this.state.ketQua}
                </Alert>
                <button className='btn btn-primary' onClick={() => this.tong()}>Tính tổng</button>
            </div>
        );
    }
}

export default TinhTongButton;
