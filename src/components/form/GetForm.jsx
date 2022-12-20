import React, { useState } from 'react'
import { useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateOrder from '../createOrder/CreateOrder';

import { GoX } from "react-icons/go";

const GetForm = ({ setState, formActive }) => {

    const [ activeOrder, setActiveOrder ] = useState(false)

    const [ dataForm, setDataForm ] = useState({
        email:'', 
        name:'', 
        phone:'',
      })

    const setSubmit = (e) => {
      e.preventDefault()

      setDataForm({name:e.target[0].value,
                   phone:e.target[1].value,
                   email:e.target[2].value})
      setActiveOrder(true)

    }

    useEffect(() => {
      setActiveOrder(false)
    }, [activeOrder])
  return (
    <div className='form-container'>

        <GoX onClick={()=> formActive(false)}/>

        {activeOrder && <CreateOrder buyer={dataForm}/>}
        <Form onSubmit={(e) => {setSubmit(e)}}>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>


            <Button variant="primary" type="submit">
                ok
            </Button>
        </Form>

    </div>
  )
}

export default GetForm