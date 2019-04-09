import React from 'react'

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
        <input type="submit" value="Find a Hike!" onClick={(e) => this.props.clickSearch(e)}/>
        </form>
      </div>
    )

  }

} // end of class
export default SearchContainer
