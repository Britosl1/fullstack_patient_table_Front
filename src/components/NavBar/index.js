import React from 'react';
import { tableColors } from '../../service/styles/colors';
import { NavBarText, NavBarImage, NavBarcontainer } from './styles';
import Profile from '../../images/profile.png'

function NavBar() {
  return (
    <NavBarcontainer color={tableColors.burntSienna}>
      <NavBarText color={tableColors.sandyBrown}>Fullstack Form Project</NavBarText>
      <NavBarImage src={Profile} />
    </NavBarcontainer>
  )
}

export default NavBar;