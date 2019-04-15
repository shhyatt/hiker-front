import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { Form, Button, Header } from 'semantic-ui-react'
import Hike from '../components/Hike'

class SearchContainer extends React.PureComponent {



  render(){
    //console.log(this.props);

    return (
      <div>
      <Form>
        <Header as="h3">Search for a Hike!</Header>
        <Form.Field>
        <label>Enter An Address:</label>
        <input type="text" name='address' onChange={this.props.handleSearch} value={this.props.address} placeholder='Street Address'/>
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input type="text" name='city' onChange={this.props.handleSearch} value={this.props.city} placeholder='City' />
        </Form.Field>
        <Form.Field>
          <label>State</label>
          <input type='text' name='state' onChange={this.props.handleSearch} value={this.props.state} placeholder='State' />
        </Form.Field>
        <Button onClick={(e) => this.props.clickSearch(e, this.props.routerProps)}as={Link} to={"/hikes"} >Find A Hike!</Button>
        </Form>
      </div>
    )

  }

} // end of class
export default SearchContainer


// handleUserChange = (event) => {
//   this.setState({[event.target.name]: event.target.value})
// }
