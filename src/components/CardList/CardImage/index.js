import styled from 'styled-components'
import colors from 'app/theme/colors'

export default styled.Image`
  height: ${props => {
    if (props.height) return props.height
    return '100'
  }};
  width: ${props => {
    if (props.width) return props.width
    return '100'
  }};

  ${props =>
    !props.noBorder && `
    border-radius: 8;
    border-color: transparent;
    border-width: 2;
  `}



`
