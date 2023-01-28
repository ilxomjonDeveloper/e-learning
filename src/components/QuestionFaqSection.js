import React from 'react';

const QuestionFaqSection = ({question, answer}) => {
  return <div className='question'>
    <h4>{question}</h4>
    <p>{answer}</p>
  </div>
}

export default QuestionFaqSection;