import React from 'react'
import { Form, Button } from 'semantic-ui-react'


class Login extends React.Component {

 render() {
   //console.log(this.props);
  return (

         <div>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input onChange={(e) =>this.props.handleFirstName(e)}placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input onChange={(e) =>this.props.handleLastName(e)}placeholder='Last Name' />
              </Form.Field>
                <label>E-mail</label>
                <input onChange={(e) =>this.props.handleEmail(e)}placeholder='E-mail' />
              <Form.Field>
                <label>Password</label>
                <input onChange={(e) =>this.props.handlePassword(e)}placeholder='Password' />
              </Form.Field>
              <Button type='submit' onClick={(e) => this.props.handleSignUp(e)}>Sign Up</Button>
              <Button type='submit' onClick={(e) => this.props.handleSignIn(e)}>Sign In</Button>
            </Form>
          </div>
      )

    }
}

export default Login;
