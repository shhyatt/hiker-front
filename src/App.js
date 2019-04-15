import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer'
import { Sidebar, Button, Header, Icon, Menu, Segment } from 'semantic-ui-react'
import { Route, Link, Switch } from 'react-router-dom'
import HikeContainer from './containers/HikeContainer'
import WantToHikeContainer from './containers/WantToHikeContainer'
import HaveHikedContainer from './containers/HaveHikedContainer'
import HeaderContainer from './containers/HeaderContainer'
import './App.css'
import WantToHike from './components/WantToHike'
import HaveHiked from './components/HaveHiked'
import Hike from './components/Hike'
import Login from './components/Login'
import HaveHikedDetailContainer from './containers/HaveHikedDetailContainer'
import WantToHikeDetailContainer from './containers/WantToHikeDetailContainer'
import HikeDetailContainer from './containers/HikeDetailContainer'

import WantToHikeDetail from './components/WantToHikeDetail'
import HikeDetail from './components/HikeDetail'
import CommentForm from './components/CommentForm'
import PhotoForm from './components/PhotoForm'

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
    userHaveHikedHikes: [],
    haveHikedDetail: [],
    wantToHikeDetail: [],
    hikeDetail: [],
    commentHikeID: [],
    comment: "",
    comments: [],
    detailComments: [],
    photoHikeID: [],
    photoLink: "",
    photos: [],
    detailPhotos: [],
    address: "",
    city: "",
    state: "",
    coordinateData: [],
    currentUser: []

  }

 componentDidMount = () => {
   this.fetchStates()
   this.fetchHikes()
   this.fetchUsers()
   this.likedHikes()
   this.fetchUserWantHikes()
   this.fetchHaveHiked()
   this.fetchUserHaveHiked()
   this.fetchComments()
   this.fetchPhotos()
   this.fetchCoords()
 }

 componentDidUpdate(prevProps, prevState) {
   if(prevState.wantToHike !== this.state.wantToHike){
     this.likedHikes()
   }
   if(prevState.haveHiked !== this.state.haveHiked){
      this.fetchHaveHiked()
   }
 }

 fetchHikes = (routerProps) => {

   fetch(`https://www.hikingproject.com/data/get-trails?lat=${this.state.latitude}&lon=${this.state.longitude}&maxDistance=100&key=200441896-c10efc088226e872ef079f3ab9990b2f`)
   .then(r => r.json())
   .then(hikes => {
     routerProps.history.push("/hikes")
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
     }, this.findThisUser)
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

 fetchComments = () => {
   fetch("http://localhost:3000/api/v1/comments")
   .then(r => r.json())
   .then(comments => {
     this.setState({
       comments: comments
     })
   })
 }

 fetchPhotos = () => {
   fetch("http://localhost:3000/api/v1/photos")
   .then(r => r.json())
   .then(photos => {
     this.setState({
       photos: photos
     })
   })
 }

 handleSearch = (event) => {
   //console.log(e.target.value);
  this.setState({[event.target.name]: event.target.value}, () => this.fetchCoords())
 }

 clickSearch = (e, routerProps) => {
   e.preventDefault()
   // console.log(this.state.longitude);
   // console.log(this.state.latitude);
   this.fetchHikes(routerProps)

  }

 fetchCoords = () => {
   //console.log("in fetch", this.state.address.split(" ")[0]);
   let address = this.state.address
   let firstPart = address.split(" ")[0]
   let secondPart = address.split(" ")[1]
   //console.log("1st", firstPart, "2nd", secondPart);


   fetch(`https://geocoder.api.here.com/6.2/geocode.json?searchtext=${firstPart}%20S%20${secondPart}%20${this.state.city}%20${this.state.state}&app_id=PFQ8m7mjnf4JAc0SpO4G&app_code=9zZkpoWGiYzGCkvVg0-EHw&gen=9`)
   .then(r => r.json())
   .then(coordinateData => {
     //console.log(coordinteData.Response.View[0]);
     this.setState({
       coordinateData: coordinateData
     }, this.getCoords)
   })

   //console.log(this.state.coordinateData, "256");
 }

 getCoords = () => {
    //console.log("ingetCoords", this.state.coordinateData.Response);
    let data = this.state.coordinateData

    let position = data.Response.View[0]

    if(position !== undefined){
      let coordinates = position.Result[0].Location.DisplayPosition
      this.setState({
        latitude: coordinates.Latitude,
        longitude: coordinates.Longitude,
      })
      //console.log(coordinates);
      return coordinates
    } else return null

    //console.log(data, "261");

  }

  handleSignIn = (event) => {
    event.preventDefault()
    const user = this.state.users.find(user => user.email === this.state.email && user.password_digest === this.state.password && user.first_name === this.state.firstName && user.last_name === this.state.lastName);
        if (!!user) {
          localStorage.setItem('id', user.id)
          this.setState({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
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

  findThisUser = () => {
    //console.log(this.state.users);
    let currentUser = this.state.users.find(user => user.id === parseInt(localStorage.id))
    this.setState({
      currentUser: currentUser
    })

  }
  handleLogout = () => {
    localStorage.clear()
    this.setState({
      hikes: [],
      
      latitude: "",
      longitude: "",
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
      userHaveHikedHikes: [],
      haveHikedDetail: [],
      wantToHikeDetail: [],
      hikeDetail: [],
      commentHikeID: [],
      comment: "",
      comments: [],
      detailComments: [],
      photoHikeID: [],
      photoLink: "",
      photos: [],
      detailPhotos: [],
      address: "",
      city: "",
      state: "",
      coordinateData: [],
      currentUser: []
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

  handleHaveHikedDetail = (trail) => {
    //console.log("Helllooooo", trail);
    this.setState({
      haveHikedDetail: trail
    })
    this.filterComments(trail.id)
    this.filterPhotos(trail.id)
  }

  handleWantToHikeDetail = (trail) => {
    //console.log("Hellllooooooo", trail);
    this.setState({
      wantToHikeDetail: trail
    })
    this.filterComments(trail.id)
    this.filterPhotos(trail.id)
  }

  handleHikeDetail = (trail) => {
    //console.log("helllloooooo");
    this.setState({
      hikeDetail: trail
    })
    this.filterComments(trail.id)
    this.filterPhotos(trail.id)
  }

  handleHikedIt = (id) => {
    console.log("Hellllooooo inHiked it!", id);
    //console.log(this.state.wantToHike);
    let hikeToDelete = this.state.wantToHike.find(hike => hike.user_id === parseInt(localStorage.id) && hike.hike_id === id)
    let index = this.state.wantToHike.indexOf(hikeToDelete)
    let newHikes = this.state.wantToHike
    let deleteHike = newHikes.splice(index, 1)
    this.setState({
      wantToHike: newHikes
    })
    //console.log(hikeToDelete.id);
    fetch(`http://localhost:3000/api/v1/likehikes/${hikeToDelete.id}`, {
      method: "DELETE"
    })

    this.likedHikes()

    this.handleHaveHiked(id)
  }

  handleAddComment = (id) => {
    this.setState({
      commentHikeID: id
    })
    //console.log("Hello!!!!", id);
  }

  handleComment = (e) => {
    this.setState({
      comment: e.target.value
    })

  }
  handlePostComment = () => {
    //console.log("Posting...");
    let haveHikedID = this.state.haveHiked.find(hike => hike.user_id === parseInt(localStorage.id) && hike.hike_id === this.state.commentHikeID)
    //console.log(haveHikedID.id);
    fetch("http://localhost:3000/api/v1/comments", {
      method: "POST",
      headers: {
       'Content-Type': 'application/json',
       'Accepts': 'application/json'
      },
      body: JSON.stringify({
        content: this.state.comment,
        user_id: localStorage.id,
        hike_id: this.state.commentHikeID,
        havehike_id: haveHikedID.id
      })
    })
    .then(r => r.json())
    .then(data => {
      this.setState({
        comments: [...this.state.comments, data]
      })
    })
  }

  filterComments = (id) => {
    let filteredComments = this.state.comments.filter(comment => comment.hike_id === id)
    this.setState({
      detailComments: filteredComments
    })
  }

  handleAddAPhoto = (id) => {
    //console.log("Hellooooo");
    this.setState({
      photoHikeID: id
    })
  }

  handlePhoto = (e) => {
    this.setState({
      photoLink: e.target.value
    })
    //console.log(e.target.value);
  }

  handlePostPhoto = () => {
    //console.log("Helllooooooo");
    let haveHikedID = this.state.haveHiked.find(hike => hike.user_id === parseInt(localStorage.id) && hike.hike_id === this.state.photoHikeID)
    fetch("http://localhost:3000/api/v1/photos", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        img: this.state.photoLink,
        user_id: localStorage.id,
        hike_id: this.state.photoHikeID,
        havehike_id: haveHikedID.id
      })
    })
    .then(r => r.json())
    .then(data => {
      this.setState({
        photos: [...this.state.photos, data]
      })
    })
  }

  filterPhotos = (id) => {
    let filteredPhotos = this.state.photos.filter(photo => photo.hike_id === id)
    this.setState({
      detailPhotos: filteredPhotos
    })

  }

  render() {

    return (

      <div className="App">
      <Header>
         <HeaderContainer
         currentUser={this.state.currentUser}/>
        </Header>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation ='push' icon='labeled' inverted vertical visible width='thin'>
            <Menu.Item as={Link} to='/search'>
            Back To Search
                <Icon name='search' />
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
            <Menu.Item onClick={this.handleLogout}as={Link} to='/login'>Sign Out
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
                        haveHiked={this.handleHaveHiked}
                        handleHikeDetail={this.handleHikeDetail}
                         />} />
                        <Route exact path='/search'
                        render={(props) => <SearchContainer
                        routerProps={props}
                        handleSearch={this.handleSearch}
                        clickSearch={this.clickSearch}
                        address={this.state.address}
                        city={this.state.city}
                        state={this.state.state}/>} />
                        <Route path='/wanttohike'
                        render={(props) => <WantToHikeContainer
                        userWants={this.state.userWantToHikeHikes}
                        handleWantToHikeDetail={this.handleWantToHikeDetail}
                        handleHikedIt={this.handleHikedIt}/>} />
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
                        userHaves={this.state.userHaveHikedHikes}
                        handleAddComment={this.handleAddComment}
                        handleAddAPhoto={this.handleAddAPhoto}
                        handleHaveHikedDetail={this.handleHaveHikedDetail}/>} />
                        <Route path='/havehikeddetail'
                        render={(props) => <HaveHikedDetailContainer
                        hikeDetail={this.state.haveHikedDetail}
                        comments={this.state.detailComments}
                        photos={this.state.detailPhotos}
                        handleAddComment={this.handleAddComment}
                        handleAddAPhoto={this.handleAddAPhoto}/>} />
                        <Route path='/wanttohikedetail'
                        render={(props) => <WantToHikeDetailContainer
                        hikeDetail={this.state.wantToHikeDetail}
                        handleHikedIt={this.handleHikedIt}
                        comments={this.state.detailComments}
                        photos={this.state.detailPhotos} />} />
                        <Route path='/hikedetail'
                        render={(props) => <HikeDetailContainer
                        hikeDetail={this.state.hikeDetail}
                        likedHikes={this.handleLikedHike}
                        haveHiked={this.handleHaveHiked}
                        comments={this.state.detailComments}
                        photos={this.state.detailPhotos} />} />
                        <Route path='/commentform'
                        render={(props) => <CommentForm
                        hikeID={this.state.commentHikeID}
                        handleComment={this.handleComment}
                        handlePostComment={this.handlePostComment} />} />
                        <Route path='/photoform'
                        render={(props) => <PhotoForm
                        photoID={this.state.photoHikeID}
                        handlePhoto={this.handlePhoto}
                        handlePostPhoto={this.handlePostPhoto} />} />
                      </Switch>
                    </Segment.Inline>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
      </div>

    )
  }

}

export default App;


//https://wendycollier.com/wp-content/uploads/2014/05/Trail.jpg

//app id = PFQ8m7mjnf4JAc0SpO4G
//app code = 9zZkpoWGiYzGCkvVg0-EHw
