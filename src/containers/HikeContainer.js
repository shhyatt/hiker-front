import React from 'react'
import HikeList from '../components/HikeList'
import SearchContainer from './SearchContainer'
import HaveHiked from '../components/HaveHiked'
import WantToHike from '../components/WantToHike'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Link, Route } from 'react-router-dom';
import '../App.css'

class HikeContainer extends React.Component {

  render () {
    //console.log(this.props.hikes.trails);
    return (

        <div className="App">

        <Sidebar.Pushable as ={Segment}>
          <Sidebar as={Menu} animation ='push' icon='labeled' inverted vertical visible width='thin'>
            <Menu.Item as={Link} to='/'>
                <Icon name='home' />
            </Menu.Item>
            <Menu.Item as={Link} to='/wanttohike'>
                <Icon name='thumbs up outline' />
            </Menu.Item>
            <Menu.Item as={Link} to='/havehiked'>
                  <Icon name='check' />
            </Menu.Item>
              </Sidebar>
                <Sidebar.Pusher>
                  <Segment.Inline>
                    <HikeList
                      hikes={this.props.hikes}/>
                    </Segment.Inline>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
                  
       </div>

    )
  }
}

export default HikeContainer
