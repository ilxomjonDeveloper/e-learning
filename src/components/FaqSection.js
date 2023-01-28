import React from "react";
import styled from "styled-components";
import QuestionFaqSection from "./QuestionFaqSection";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
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
    </Faq>
  );
};

// styled
const Faq = styled(About)`
  display: block;
  font-weight: lighter;
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    width: 100%;
    margin: 2rem 0rem;
  }
`

export default FaqSection;
