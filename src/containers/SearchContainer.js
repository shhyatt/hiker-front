import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { Form, Button, Header } from 'semantic-ui-react'
import Hike from '../components/Hike'

class SearchContainer extends React.Component {



  render(){
    //console.log(this.props);

    return (
      <div>
      <Form>
        <Header as="h3">Search for a Hike!</Header>
        <Form.Field>
        <label>Search By State:</label>
        <input type="text" onChange={(e) => this.props.handleSearch(e)}/>
        </Form.Field>
        <Button onClick={(e) => this.props.clickSearch(e, this.props.routerProps)}as={Link} to={"/hikes"} >Find A Hike!</Button>
        </Form>
      </div>
    )

  }

} // end of class
export default SearchContainer


//<Menu.Item onClick={this.handleLogout}as='a'>
//as={Link} to='/login'>

// <div>
//    <Form>
//      <Header as="h3">Sign In or Sign Up</Header>
//      <Form.Field>
//        <label>First Name</label>
//        <input onChange={handleUserChange} name="firstName" value={firstName} placeholder='First Name' />
//      </Form.Field>
//<Button as={Link} to={“/dashboard”}>Back</Button>
