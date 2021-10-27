import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import '../Header/Header.css'

const Registation = () => {
    return (
        <div className='form'>
            <div className='main-form'>
                <Form>
                    <h6 className='text-center ms-5'>Register as a volunteer.</h6>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                        <Form.Label column sm={2}>

                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Full name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>

                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalDate" >
                        <Form.Label column sm={2}>

                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="date" placeholder="Date" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalDate" >
                        <Form.Label column sm={2}>

                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Description" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalDate" >
                        <Form.Label column sm={2}>

                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Program name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button className='btn btn-primary' type="submit">Register Now</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Registation;