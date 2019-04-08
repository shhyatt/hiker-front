import React from 'react'

import HikeContainer from './HikeContainer'

class SearchContainer extends React.Component {

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
   // console.log(e.target);
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

  render(){
    return (
      <div>
      <form>
        <label>
          Search By State:
          <input type="text" id="search" onChange={(e) => this.handleSearch(e)}/>
        </label>
        <input type="submit" value="Find a Hike!" onClick={(e) => this.clickSearch(e)}/>
        </form>
        <HikeContainer
        hikes={this.state.hikes}/>
      </div>
    )

  }

} // end of class
export default SearchContainer
