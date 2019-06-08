import React from 'react'
import { Form, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Login = (props) => {


   //console.log(this.props);
  return (

         <div>
            <Form>
              <h2>Sign In or Sign Up</h2>
              <Form.Field>
                <label>First Name</label>
                <input onChange={props.handleUserChange} name="firstName" value={props.firstName} placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input onChange={props.handleUserChange} name="lastName" value={props.lastName} placeholder='Last Name' />
              </Form.Field>
                <label>E-mail</label>
                <input onChange={props.handleUserChange} name="email" value={props.email} placeholder='E-mail' />
              <Form.Field>
                <label>Password</label>
                <input onChange={props.handleUserChange} type="password" name="password" value={props.password} placeholder='Password' />
              </Form.Field>
              <Button type='submit' onClick={(event) => props.handleSignUp(event, props.routerProps)}as={Link} to={"/search"}>Sign Up</Button>
              <Button type='submit' onClick={(event) => props.handleSignIn(event, props.routerProps)}as={Link} to={"/search"}>Sign In</Button>
            </Form>
          </div>
      )


}

export default Login;
