import React from 'react'
import { Form, Button, Header } from 'semantic-ui-react'


const Login = ({handleUserChange, firstName, lastName, email, password, handleSignIn, handleSignUp}) => {


   //console.log(this.props);
  return (

         <div>
            <Form>
              <Header as="h3">Sign In or Sign Up</Header>
              <Form.Field>
                <label>First Name</label>
                <input onChange={handleUserChange} name="firstName" value={firstName} placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input onChange={handleUserChange} name="lastName" value={lastName} placeholder='Last Name' />
              </Form.Field>
                <label>E-mail</label>
                <input onChange={handleUserChange} name="email" value={email} placeholder='E-mail' />
              <Form.Field>
                <label>Password</label>
                <input onChange={handleUserChange} type="password" name="password" value={password} placeholder='Password' />
              </Form.Field>
              <Button type='submit' onClick={handleSignUp}>Sign Up</Button>
              <Button type='submit' onClick={handleSignIn}>Sign In</Button>
            </Form>
          </div>
      )


}

export default Login;
