import React from "react";
import QuestionFaqSection from "./QuestionFaqSection";

const FaqSection = () => {
  return (
    <div>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <QuestionFaqSection
        question={"Can I learn programming from 0 on your platform?"}
        answer={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure labore ratione aut soluta eligendi doloremque possimus odit deleniti, perspiciatis atque."
        }
      />
      <QuestionFaqSection
        question={"How much do I have to pay per month?"}
        answer={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure labore ratione aut soluta eligendi doloremque possimus odit deleniti, perspiciatis atque."
        }
      />
      <QuestionFaqSection
        question={"If I buy the course, can my brother and I also study?"}
        answer={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure labore ratione aut soluta eligendi doloremque possimus odit deleniti, perspiciatis atque."
        }
      />
      <QuestionFaqSection
        question={"Is it possible to pay in full in one go?"}
        answer={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure labore ratione aut soluta eligendi doloremque possimus odit deleniti, perspiciatis atque."
        }
      />
    </div>
  );
};

export default FaqSection;
