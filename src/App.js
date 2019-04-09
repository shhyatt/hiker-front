import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer'
import { Sidebar, Button, Modal, Header, Form, Icon, Menu, Segment } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'
import HikeContainer from './containers/HikeContainer'
import './App.css'
import WantToHike from './components/WantToHike'
import HaveHiked from './components/HaveHiked'
import Login from './components/HaveHiked'



class App extends Component {

  state = {
    hikes: [],
    unitedStates: [],
    searchedState: "",
    latitude: "",
    longitude: ""
  }

 componentDidMount = () => {
   this.fetchStates()
   this.fetchHikes()
 }

 fetchHikes = () => {
   fetch(`https://www.hikingproject.com/data/get-trails?lat=${this.state.latitude}&lon=${this.state.longitude}&maxDistance=100&key=200441896-c10efc088226e872ef079f3ab9990b2f`)
   .then(r => r.json())
   .then(hikes => {
     //console.log(hikes.trails);
     this.setState({
       hikes: hikes
     })

   })
 }

 fetchStates = () => {
   fetch("http://localhost:3000/api/v1/states")
   .then(r => r.json())
   .then(regions => {
     //console.log(regions);
     this.setState({
       unitedStates: regions
     })
   })

 }

 handleSearch = (e) => {
   //console.log(e.target.value);
  this.setState({
    searchedState: e.target.value
  })
 }

 clickSearch = (e) => {
   e.preventDefault()
    //console.log(e.target);
   // console.log(this.state.searchedState)
   //console.log(this.state.unitedStates);
   this.state.unitedStates.find(area => {

      if(this.state.searchedState === area.name){
        return this.setState({
          latitude: area.latitude,
          longitude: area.longitude
        }, () => this.fetchHikes() )

      }
   })
 }


  handleSignIn = (e) => {
    //console.log("Hello!")
    console.log(e.target);
    // return (
    // <Modal trigger={e.target}>
    //   <Modal.Header>Sign In</Modal.Header>
    //       <Modal.Content>
    //         <Form>
    //           <Form.Field>
    //             <label>First Name</label>
    //             <input placeholder='First Name' />
    //           </Form.Field>
    //           <Form.Field>
    //             <label>Last Name</label>
    //             <input placeholder='Last Name' />
    //           </Form.Field>
    //             <label>E-mail</label>
    //             <input placeholder='E-mail' />
    //           <Form.Field>
    //             <label>Password</label>
    //             <input placeholder='Password' />
    //           </Form.Field>
    //           <Button type='submit'>Submit</Button>
    //         </Form>
    //         </Modal.Content>
    //   </Modal>
    //   )
    }
  render() {
    return (

      <div className="App">
      <header className="App-header">
      <SearchContainer
      handleSearch={this.handleSearch}
      clickSearch={this.clickSearch}/>
      </header>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation ='push' icon='labeled' inverted vertical visible width='thin'>
            <Menu.Item as={Link} to='/'>
            Back To Search
                <Icon name='home' />
            </Menu.Item>
            <Menu.Item as={Link} to='/wanttohike'>Hikes I Want to Do
                <Icon name='thumbs up outline' />
            </Menu.Item>
            <Menu.Item as={Link} to='/havehiked'>Hikes I've Done
                  <Icon name='check' />
            </Menu.Item>
            <Menu.Item as='a'>Sign In
                  <Icon onClick={(e) => this.handleSignIn(e)}name='sign-in alternate' />
            </Menu.Item>
            <Menu.Item as='a'>Sign Out
                  <Icon name='sign-out alternate' />
            </Menu.Item>
              </Sidebar>
                <Sidebar.Pusher>
                  <Segment.Inline>
                  <HikeContainer
                  hikes={this.state.hikes} />
                    </Segment.Inline>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
        <Route exact path='/' component={SearchContainer} />
        <Route path='/wanttohike' component={WantToHike} />
        <Route path='/havehiked' component={HaveHiked} />
        <Route path='/login' component={Login} />
      </div>
    )
  }

}

export default App;
