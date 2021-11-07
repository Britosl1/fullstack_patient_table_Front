import styled from 'styled-components';

export const NavBarcontainer = styled.nav`
  height: 70px;
  background-color: ${props => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`

export const NavBarText = styled.h1`
  color: ${props => props.color};
  font-size: 30px;
  font-weight: 700;
`

export const NavBarImage = styled.img`
  height: 50px;
  border-radius: 50px;
`