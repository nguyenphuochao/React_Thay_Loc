import React, { Component, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TinhTongFunc(props) {
    const[soA , setSoA] = useState("");
    const[soB , setSoB] = useState("");
    const[tong , setTong] = useState("");
    return (
        <div className="container">
            <Form>
                <Form.Group>
                    <Form.Label>Số A:</Form.Label>
                    <Form.Control type="text" name="soA" value={soA} onChange={(e) => setSoA(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Số B:</Form.Label>
                    <Form.Control type="text" name="soB" value={soB} onChange={(e) => setSoB(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Kết quả</Form.Label>
                    <Alert variant="success">{tong}</Alert>
                </Form.Group>
                <Button variant="primary" onClick={(e) => setTong(Number(soA) + Number(soB))} type="button">
                    Tính Tổng
                </Button>
            </Form>
        </div>
    );
}
export default TinhTongFunc;