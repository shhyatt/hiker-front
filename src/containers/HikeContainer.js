import React from 'react'
import HikeList from '../components/HikeList'
import { Icon, Menu, Segment, Sidebar, Header, Image } from 'semantic-ui-react'
import '../App.css'

class HikeContainer extends React.Component {

  render () {
    //console.log(this.props.hikes.trails);
    return (
      <div className="App">

        <Sidebar.Pushable as ={Segment}>
          <Sidebar as={Menu} animation ='push' icon='labeled' inverted vertical visible width='thin'>
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='gamepad' />
                Games
                </Menu.Item>
                <Menu.Item as='a'>
                  <Icon name='camera' />
                  Channels
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
