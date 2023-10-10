import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'

function Resttop({ op }) {
    console.log(op)   
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)

    const handleShow = () => setShow(true)

    return (
        <div>

            <Button variant='dark' className='text-info mt-4' onClick={handleShow} >Operating Hours</Button>


            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Operating Hours</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <ListGroup>

                            <ListGroup.Item> Monday: {op.Monday}</ListGroup.Item>
                            <ListGroup.Item> Tuesday: {op.Tuesday}</ListGroup.Item>
                            <ListGroup.Item> Wednesday:{op.Wednesday}</ListGroup.Item>
                            <ListGroup.Item> Thursday: {op.Thursday}</ListGroup.Item>
                            <ListGroup.Item> Friday: {op.Friday}</ListGroup.Item>
                            <ListGroup.Item> Saturday: {op.Saturday}</ListGroup.Item>
                            <ListGroup.Item> Sunday: {op.Sunday}</ListGroup.Item>

                        </ListGroup>
                    </Modal.Body>


                    {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer> */}

                </Modal>
            </div>
        </div>
    )
}

export default Resttop