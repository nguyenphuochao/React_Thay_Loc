import { Form, Alert, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const TinhTongFunc = (props) => {
    const [soA, setSoA] = useState("");
    const [soB, setSoB] = useState("");
    const [ketQua, setKetQua] = useState();
    return (
        <div className="container">
            <Form.Group controlId="form-soA">
                <Form.Label>Số A:</Form.Label>
                <Form.Control type="text" name="soA" value={soA} onChange={(e) => setSoA(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="form-soB">
                <Form.Label>Số B:</Form.Label>
                <Form.Control type="text" name="soB" value={soB} onChange={(e) => setSoB(e.target.value)} />
            </Form.Group>
            <Form.Label>Kết quả:</Form.Label>
            <Alert variant="success">
                {ketQua}
            </Alert>
            <Button variant="primary" onClick={(e) => setKetQua(Number(soA) + Number(soB))}>
                Tính Tổng
            </Button>
        </div>
    )
}
export default TinhTongFunc