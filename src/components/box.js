import React from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types'

const Box = styled.div`
  width: 50px;
  height: 50px;
  background: red;
  position: absolute;
  transition: ${props => `linear ${props.duration}ms`};
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
`

Box.propTypes = {
  top: PropTypes.number,
  left: PropTypes.number,
  duration: PropTypes.number,
}

Box.defaultProps = {
  top: 0,
  left: 0,
  duration: 500,
}

export default React.memo(Box)
