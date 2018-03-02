import styled from 'styled-components'
import colors from 'app/theme/colors'

export const ButtonContainer = styled.View`
display: flex;
`

export const ButtonView = styled.View`
display: flex;
border-radius: 8;
border-color: transparent;
border-width: 2;
justify-content: center;
align-items: center;
height: ${props => {
    if (props.height) return props.height
    return '46'
}};
background-color: ${props => {
    if (props.bkColor) return props.bkColor
    return colors.white
}};
`
