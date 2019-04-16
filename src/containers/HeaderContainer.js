import React from 'react'
import '../App.css'
import { Icon, Menu, Image } from 'semantic-ui-react'

class HeaderContainer extends React.Component {


  render () {

    return (

      <Menu inverted secondary>
        <Menu.Item className='header'name='tree'>
          <Image src='http://www.clker.com/cliparts/l/4/C/n/B/T/black-gold-mountain-outline-md.png'
          style={{height:'30px'}}
          style={{width: '65px'}} size='small' name='tree' />
      </Menu.Item>
      <Menu.Item className='header'name='HIKR' />
      <Menu.Item className='header' name={'welcome, ' +this.props.currentUser+'!'} />
         </Menu>

    )
  }


}


export default HeaderContainer

//tree
