import styled from 'styled-components'
import colors from 'app/theme/colors'

export default styled.View`
  flex: 1;
  background-color: ${props => {
    if (props.violet) return colors.nuViolet
    if (props.violetDark) return colors.nuVioletDark
    if (props.blue) return colors.nuBlue
    return 'white'
  }};
`
