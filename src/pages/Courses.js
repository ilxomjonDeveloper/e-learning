import React from "react";
import styled from "styled-components";
//Images
import javaScript from "../images/photo_2022-06-02_22-47-42.jpg";
import react from "../images/photo_2022-07-05_07-42-06.jpg";
// Link
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <StyledCourses>
      <Course>
        <h2>Interactive JavaScript</h2>
        <div className="line"></div>
        <Link>
          <img src={javaScript} alt="javascript" />
        </Link>
      </Course>
      <Course>
        <h2>Interactive React & Redux</h2>
        <div className="line"></div>
        <Link>
          <img src={react} alt="react" />
        </Link>
      </Course>
    </StyledCourses>
  );
};

const StyledCourses = styled.div`
  min-height: 100vh;
  padding: 5rem 10rem;
`;

const Course = styled.div`
  padding-bottom: 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  .line {
    width: 100%;
    height: .1rem;
    background-color: #fff;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export default Courses;
