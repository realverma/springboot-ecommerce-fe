import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const User = () => {
  return (
    <div>User
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group>
        <button className='btn btn-sucess mx-5'>Sign In</button>
        <button className='btn btn-danger mx-5'><Link to={'/usersignup'}>Sign Up</Link></button>
      </Form.Group>
    </Form>
    </div>
  )
}

export default User