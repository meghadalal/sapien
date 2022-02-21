
import React, { Component } from 'react'
import { Button, Modal, Form, Dropdown } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


export default class MyButton extends Component {
    constructor (props) {
        super(props)
        this.state={
            openModal: false
        }
    }

    handleShow = () => {
        this.setState({openModal: true})
    }

    handleClose = () => {
        this.setState({openModal: false})
    }

    render() {
        return (

          
            <div>
              <Form className='search'>
            <SearchOutlinedIcon/> 
            <input
            type="text"
            id="name-search"/>

        </Form>
                <Button className='end-0' onClick={this.handleShow}> Add Leads<AddCircleOutlineOutlinedIcon/> </Button>
                <Modal show={this.state.openModal} onHide={this.handleClose}>
                    <Modal.Dialog>
                    <Modal.Header closeButton>
                            <Modal.Title>Lead</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <strong>Status</strong>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    New
                                  </Dropdown.Toggle>
                                </Dropdown>
                              
                              <Dropdown> <strong>Sources</strong><br/>
                                <DropdownToggle id="dropdown-basic">
                                Website
                                </DropdownToggle>
                              </Dropdown>
                              <Form>
                              <Form.Group>
                                  <Form.Label>Notes</Form.Label><br/>
                                  <Form.Control placeholder='Embark Your journey 
                                  mini statement mini statementmini statementmini statementmini statementmini statement' />
                                </Form.Group>
                              </Form>
                              <h4><strong>Lead Details</strong></h4>
                              
                              <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                  <Form.Label>Name</Form.Label><br/>
                                  <Form.Control type="name" placeholder="AchiM" />
                                  </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                  <Form.Label>Number</Form.Label><br/>
                                  <Form.Control  placeholder="Embark on your journey" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                  <Form.Label>Email</Form.Label><br/>
                                  <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group>
                                  <Form.Label>Lead's Message</Form.Label><br/>
                                  <Form.Control placeholder='Embark Your journey 
                                  mini statement mini statementmini statementmini statementmini statementmini statement' />
                                </Form.Group>
                                <Button variant="success" type="Save">
                                  Save
                                </Button>
                              </Form>
                        
                        </Modal.Body>

                        
                    </Modal.Dialog>
                    
                </Modal>
              </div>
        )
    }
}

