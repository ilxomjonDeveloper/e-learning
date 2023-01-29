import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return(
    <StyledNav>
      <h1>
        <a href="#!" id='logo'>e-Learning</a>
      </h1>
      <ul>
        <li><a href="#!">About Us</a></li>
        <li><a href="#!">Courses</a></li>
        <li><a href="#!">Contact Us</a></li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 7rem;
  background-color: #383e47;
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 40%;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  #logo {
    font-weight: 700;
    font-size: 1.5rem;
    font-family: 'Silkscreen', cursive;
  }
  li {

  }
`

export default Nav;