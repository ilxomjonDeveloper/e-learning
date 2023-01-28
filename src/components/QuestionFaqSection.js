import React from 'react';

const QuestionFaqSection = ({question, answer}) => {
  return <div className='question'>
    <h4>{question}</h4>
    <p className='answer'>{answer}</p>
    <div className="faq-line"></div>
  </div>
}

export default QuestionFaqSection;