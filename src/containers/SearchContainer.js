import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Hike from '../components/Hike'

class SearchContainer extends React.Component {



  render(){
    //console.log(this.props);

    return (
      <div>
      <form>
        <label>
          Search By State:
          <input type="text" id="search" onChange={(e) => this.props.handleSearch(e)}/>
        </label>
        <Link to={'/hikes'}>
        <input className="btn btn-primary" type="submit" value="Find a Hike!" onClick={(e) => this.props.clickSearch(e)} />
        </Link>



        </form>
      </div>
    )

  }

} // end of class
export default SearchContainer


//<Menu.Item onClick={this.handleLogout}as='a'>
//as={Link} to='/login'>
