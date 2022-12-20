import React from 'react';
import styled from 'styled-components';

import ContainerBox from './ContainerBox';
import Button from './Button';


const Boolean = ({questionTitle, onAnswer, answers}) => {

  return (
    <ContainerBox>
        <p>Icon</p>
        <Question>{questionTitle}</Question>
          <Questions>
            <Button onClick={onAnswer}>{answers[0]}</Button>
            <Button onClick={onAnswer}>{answers[1]}</Button>
          </Questions>
    </ContainerBox>
  );
}

const Question = styled.p`
  margin: 0;
  padding-bottom: 1rem;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin-bottom: 1rem;
`

export default Boolean;