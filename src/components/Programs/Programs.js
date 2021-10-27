import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../Header/Header.css'

const Programs = (params) => {
    console.log(params.program)
    const { img, name } = params.program
    // const {name,img}=params.Program
    return (
        <div>
            <Col>
                <Card className='bg-warning text-truncate h-full border program'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='fs-5'> {name} </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Programs;