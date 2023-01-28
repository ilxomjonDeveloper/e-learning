import React from "react";
// import images
import homeIntro2 from "../images/home_intro2.jpg"

const BenefitsSection = () => {
  return <div className="benefits">
		<div className="description">
			<h2>High quality learning system</h2>
			<div className="benefit">
				<h3>Online platform</h3>
				<h3>High experienced mentors</h3>
				<h3>Fast learning system</h3>
				<h3>Offline school for children</h3>
			</div>
		</div>
		<img src={homeIntro2} alt="learning process" />
	</div>;
};

export default BenefitsSection;
