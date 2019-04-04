import React from 'react'

import HikeContainer from './HikeContainer'

class SearchContainer extends React.Component {

  state = {
    hikes: []
  }


 componentDidMount() {
   this.fetchHikes()
 }

 fetchHikes() {
   fetch("http://localhost:3000/api/v1/hikes")
   .then(r => r.json())
   .then(hikes => {
     //console.log(hikes);
     this.setState({
       hikes: hikes
     })
   })

 }



  render(){
    //console.log(this.state.hikes);
    return (
      <div>
        <HikeContainer
        hikes={this.state.hikes}/>
      </div>
    )

  }

} // end of class
export default SearchContainer
