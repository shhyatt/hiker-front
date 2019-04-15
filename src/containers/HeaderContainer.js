import React from 'react'
import '../App.css'
import { Icon, Menu } from 'semantic-ui-react'

class HeaderContainer extends React.Component {


  render () {

    return (

      <Menu inverted secondary>
        <Menu.Item className='header'name='tree'>
          <Icon name='tree' />
      </Menu.Item>
      <Menu.Item className='header'name='HIKR' />
      <Menu.Item className='header' name='Welcome,' />
      <Menu.Item className='header' name={this.props.currentUser.first_name} />
         </Menu>

    )
  }


}


export default HeaderContainer

//tree
