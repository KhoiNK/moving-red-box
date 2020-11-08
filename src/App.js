import React, { useState, useRef } from "react";
import styled from "styled-components";
import MovingBox from "./components/box";
import "./styles.css";

const INPUT_WRAPPER_HEIGHT = 25
// Since the box is (50x50), to make the box center move to the pointer postion.
const HALF_BOX_WIDTH = 25

export default function App() {
  const [coor, setCoor] = useState({ top: 0, left: 0 });
  const [duration, setDuration] = useState(500);
  const [isError, setIsError] = useState(false);

  const onClick = (e) => {
    setCoor({ top: e.clientY - (HALF_BOX_WIDTH + INPUT_WRAPPER_HEIGHT), left: e.clientX - HALF_BOX_WIDTH })
  };

  const onChangeDuration = (e) => {
    try {
      const { value } = e.target;
      if(value === '') {
        setDuration(500);
        setIsError(false);
        return;
      }
      const number = parseInt(value)
      setDuration(number);
      if (number < 0) {
        setIsError(true);
        return;
      }
      if (!Number.isInteger(number)) {
        setIsError(true);
        return;
      }
      setIsError(false);
    } catch (e) { setIsError(true); }
  };

  return (
    <div>
      <InputWrapper height={INPUT_WRAPPER_HEIGHT}>
        <label>Animation duration (ms):</label>
        <Input isError={isError} onChange={onChangeDuration} type="number" />
        {' '}
        <ErrorLabel showError={isError}>Only positive number is accepted</ErrorLabel>
      </InputWrapper>
      <div className="App" onClick={onClick}>
        <MovingBox top={coor.top} left={coor.left} duration={duration} />
      </div>
    </div>
  );
}

const InputWrapper = styled.div`
  height: ${props => props.height};
`

const Input = styled.input`
  ${props => props.isError ? `border-color: red; color: red` : ''}
`

const ErrorLabel = styled.div`
  color: red;
  display: ${props => props.showError ? 'inline-block' : 'none'}
`