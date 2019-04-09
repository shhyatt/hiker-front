import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer'
import { Sidebar, Button, Modal, Header, Form, Icon, Menu, Segment } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'
import HikeContainer from './containers/HikeContainer'
import './App.css'
import WantToHike from './components/WantToHike'
import HaveHiked from './components/HaveHiked'
import Login from './components/Login'



class App extends Component {

  state = {
    hikes: [],
    unitedStates: [],
    searchedState: "",
    latitude: "",
    longitude: "",
    users: [],
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    haveHiked: [],
    WantToHike: []
  }

 componentDidMount = () => {
   this.fetchStates()
   this.fetchHikes()
   this.fetchUsers()
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

 fetchUsers = () => {
   fetch("http://localhost:3000/api/v1/users")
   .then(r => r.json())
   .then(users => {
     //console.log(users);
     this.setState({
       users: users
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
    // console.log(e.target);
    }

  handleSignUp = (e) => {
    //console.log("Hello!")
      // console.log(e.target);
      }

  handleFirstName = (e) => {
    //console.log("firstname", e.target.value);
    }

  handleLastName = (e) => {
    //console.log("LastName", e.target.value);
    }
  handleEmail = (e) => {
    //console.log("email", e.target.value);
      }
  handlePassword = (e) => {
    //console.log("Password", e.target.value);
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
            <Menu.Item as={Link} to='/login'>Sign In
                  <Icon name='sign-in alternate' />
            </Menu.Item>
            <Menu.Item as='a'>Sign Out
                  <Icon name='sign-out alternate' />
            </Menu.Item>
              </Sidebar>
                <Sidebar.Pusher>
                  <Segment.Inline>
                  <HikeContainer
                  hikes={this.state.hikes} />
                  <Route exact path='/' component={SearchContainer} />
                  <Route path='/wanttohike' component={WantToHike} />
                  <Route path='/login'
                  render={(props) => <Login
                  handleSignIn={this.handleSignIn}
                  handleFirstName={this.handleFirstName}
                  handleLastName={this.handleLastName}
                  handleEmail={this.handleEmail}
                  handlePassword={this.handlePassword}
                  handleSignUp={this.handleSignUp} />} />
                  <Route path='/havehiked' component={HaveHiked} />
                    </Segment.Inline>
              </Sidebar.Pusher>
            </Sidebar.Pushable>


      </div>
    )
  }

}

export default App;

// <Route path="/login"
//           render={(props) => <Login
//             email={this.state.email}
//             password={this.state.password}
//             handleChange={this.handleChange}
//             handleLogin={this.handleLogin}
//           />}
//         />
