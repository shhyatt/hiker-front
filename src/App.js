import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer'
import { Sidebar, Button, Header, Icon, Menu, Segment } from 'semantic-ui-react'
import { Route, Link, Switch } from 'react-router-dom'
import HikeContainer from './containers/HikeContainer'
import WantToHikeContainer from './containers/WantToHikeContainer'
import HaveHikedContainer from './containers/HaveHikedContainer'
import './App.css'
import WantToHike from './components/WantToHike'
import HaveHiked from './components/HaveHiked'
import Hike from './components/Hike'
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
    wantToHike: [],
    userWantToHike: [],
    userWantHikeID: [],
    userWantToHikeHikes: [],
    userHaveHiked: [],
    userHaveHikedID: [],
    userHaveHikedHikes: []
  }

 componentDidMount = () => {
   this.fetchStates()
   this.fetchHikes()
   this.fetchUsers()
   this.likedHikes()
   this.fetchUserWantHikes()
   this.fetchHaveHiked()
   this.fetchUserHaveHiked()
 }

 fetchHikes = () => {

   fetch(`https://www.hikingproject.com/data/get-trails?lat=${this.state.latitude}&lon=${this.state.longitude}&maxDistance=100&key=200441896-c10efc088226e872ef079f3ab9990b2f`)
   .then(r => r.json())
   .then(hikes => {
     window.history.pushState({},"/hikes","/hikes")
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

 likedHikes = () => {
   fetch("http://localhost:3000/api/v1/likehikes")
   .then(r =>  r.json())
   .then(hikes => {
     //console.log(hikes)
       this.setState({
         wantToHike: hikes
       })
       this.filterLikedHikes()
    })
  }

  filterLikedHikes = () => {
    let userHikes = this.state.wantToHike.filter(hike => hike.user_id === parseInt(localStorage.id))
    //console.log(userHikes);
    this.setState({
      userWantToHike: userHikes
    })
    this.getUserLikeIDs()
  }

  getUserLikeIDs = () => {
    let ids = this.state.userWantToHike.map(hike => hike.hike_id)
    //console.log(ids);
    this.setState({
      userWantHikeID: ids
    }, () => this.fetchUserWantHikes())
  }

 fetchUserWantHikes = () => {
   fetch(`https://www.hikingproject.com/data/get-trails-by-id?ids=${this.state.userWantHikeID}&key=200441896-c10efc088226e872ef079f3ab9990b2f`)
   .then(r => r.json())
   .then(data => {
     //console.log(data);
     this.setState({
       userWantToHikeHikes: data
     })
   })

 }

 fetchHaveHiked = () => {
   fetch("http://localhost:3000/api/v1/havehikes")
   .then(r => r.json())
   .then(data => {
     //console.log(data);
     this.setState({
       haveHiked: data
     })
     this.filterHaveHiked()
   })
 }

 filterHaveHiked = () => {
   let userHaveHiked = this.state.haveHiked.filter(hike => hike.user_id === parseInt(localStorage.id))
   //console.log(userHikes);
   this.setState({
     userHaveHiked: userHaveHiked
   })
   this.getUserhaveHikedID()
 }

 getUserhaveHikedID = () => {
   let ids = this.state.userHaveHiked.map(hike => hike.hike_id)
   //console.log(ids);
   this.setState({
     userHaveHikedID: ids
   }, () => this.fetchUserHaveHiked())
 }

 fetchUserHaveHiked = () => {
   fetch(`https://www.hikingproject.com/data/get-trails-by-id?ids=${this.state.userHaveHikedID}&key=200441896-c10efc088226e872ef079f3ab9990b2f`)
   .then(r => r.json())
   .then(data => {
     this.setState({
       userHaveHikedHikes: data
     })
     //console.log(data);
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

  handleSignIn = (event) => {
    event.preventDefault()
    const user = this.state.users.find(user => user.email === this.state.email && user.password_digest === this.state.password && user.first_name === this.state.firstName && user.last_name === this.state.lastName);
        if (!!user) {
          localStorage.setItem('id', user.id)
          this.setState({
            email: user.email,
            password: user.password_digest,
            firstName: user.first_name,
            lastName: user.last_name
          })
        } else {
          return alert("Please double check your email or password.")
        }
    }

  handleSignUp = (event) => {
    event.preventDefault()
    let data = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password_digest: this.state.password
    }
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(user => {
      localStorage.setItem('id', user.id)
      this.setState({
        users: [...this.state.users, user],
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        password: user.password_digest
      })
    })
    //console.log("Hello!")
      // console.log(e.target);
      }
  handleUserChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleLogout = () => {
    localStorage.clear()
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      hikes: [],
      searchedState: "",
      haveHiked: [],
      wantToHike: [],
      userWantToHike: [],
      userWantToHikeHikes: []
    })
    //console.log("hello!");
  }

  handleLikedHike = (id) => {
    // console.log("Helllloooooo", id, localStorage.id);
    fetch("http://localhost:3000/api/v1/likehikes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        user_id: localStorage.id,
        hike_id: id
      })
    })
    .then(r => r.json())
    .then(data => {
      //console.log(data);
      this.setState({
        wantToHike: [...this.state.wantToHike, data]
      })
    })
  }

  handleHaveHiked = (id) => {
    //console.log("Helllloooooo", id)
    fetch("http://localhost:3000/api/v1/havehikes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        user_id: localStorage.id,
        hike_id: id
      })
    })
    .then(r => r.json())
    .then(data => {
      //console.log(data);
      this.setState({
        haveHiked: [...this.state.haveHiked, data]
      })
    })
  }

  render() {
    //console.log(this.state.firstName);
    //console.log(this.state.userWantToHike);
    //console.log(this.state.userWantToHikeHikes);
    //console.log(this.state.haveHiked);
    //console.log(this.state.userHaveHikedHikes);
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
            <Menu.Item onClick={this.handleLogout}as='a'>Sign Out
                  <Icon name='sign-out alternate' />
            </Menu.Item>
              </Sidebar>
                <Sidebar.Pusher>
                  <Segment.Inline>
                      <Switch>
                        <Route path='/hikes'
                        render={(props) => <HikeContainer
                        hikes={this.state.hikes}
                        likedHikes={this.handleLikedHike}
                        haveHiked={this.handleHaveHiked} />} />
                        <Route exact path='/'
                        render={(props) => <SearchContainer
                        handleSearch={this.handleSearch}
                        clickSearch={this.clickSearch}/>} />
                        <Route path='/wanttohike'
                        render={(props) => <WantToHikeContainer
                        userWants={this.state.userWantToHikeHikes}/>} />
                        <Route path='/login'
                        render={(props) => <Login
                        handleSignIn={this.handleSignIn}
                        handleSignUp={this.handleSignUp}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        password={this.state.password}
                        handleUserChange={this.handleUserChange} />} />
                        <Route path='/havehiked'
                        render={(props) => <HaveHikedContainer
                        userHaves={this.state.userHaveHikedHikes}/>} />
                      </Switch>
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
