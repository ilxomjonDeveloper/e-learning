import React from 'react';
import styled from 'styled-components';
// import Link
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <StyledNav>
      <h1>
        <Link to="/" id='logo'>e-Learning</Link>
      </h1>
      <ul>
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
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