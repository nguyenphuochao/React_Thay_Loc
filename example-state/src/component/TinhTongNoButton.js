import React, { Component } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class TinhTongNoButton extends Component {
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
        //state là state được cập nhật ở setState trên
        this.setState((state) => ({
            ketQua: Number(state.soA) + Number(state.soB)
        }))
    }

    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Group>
                        <Form.Label>Số A:</Form.Label>
                        <Form.Control type="text" name="soA" value={this.state.soA} onChange={(e) => this.changeInput(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Số B:</Form.Label>
                        <Form.Control type="text" name="soB" value={this.state.soB} onChange={(e) => this.changeInput(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Kết quả</Form.Label>
                        <Alert variant="success">{this.state.ketQua}</Alert>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default TinhTongNoButton;