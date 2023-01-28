import React from "react";
import styled from "styled-components";
import { About, Description, Image } from "../styles";
// import images
import homeIntro2 from "../images/home_intro2.jpg";

const BenefitsSection = () => {
  return (
    <Benefits>
      <BenefitsDescription>
        <h2>High-Quality Learning System</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced mentors</h3>
          <h3>Fast learning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </BenefitsDescription>
      <Image>
        <img src={homeIntro2} alt="learning process" />
      </Image>
    </Benefits>
  );
};

// styled
const Benefits = styled(About)`
  flex-direction: row-reverse;
  h2 {
    color: #30bee1;
    padding-bottom: 3rem;
  }
  h3 {
    font-size: 1.4rem;
    padding: 1rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem;
    width: 70%;
		clip-path: polygon(0 10%, 100% 0, 100% 91%, 0% 100%);
		border-left: 5px solid #30bee1;
  }
`;
const BenefitsDescription = styled(Description)`
	padding-right: 0rem;
	padding-left: 5rem;
`

export default BenefitsSection;
