import styled from 'styled-components'
import colors from 'app/theme/colors'

export default styled.View`
elevation: 2;
flex: 1;
flex-wrap: wrap;
justify-content: flex-start;
flex-direction: row;
align-items: center;
height: 156;
border-color: ${colors.grayLight};
border-bottom-width: 1;
border-style: solid;
background-color: ${props => {
  if (props.white) return colors.white
  if (props.blue) return colors.blue
  return 'transparent'
}};
`
