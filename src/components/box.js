import React from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types'

const MovingBox = (props) => (<Box top={props.top} left={props.left} duration={props.duration} />)

const Box = styled.div`
  width: 50px;
  height: 50px;
  background: red;
  position: absolute;
  transition: ${props => `linear ${props.duration !== '' ? props.duration : 500}ms`};
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
`

MovingBox.propTypes = {
  top: PropTypes.number,
  left: PropTypes.number,
  duration: PropTypes.number,
}

MovingBox.defaultProps = {
  top: 0,
  left: 0,
  duration: 500,
}

export default React.memo(MovingBox)
