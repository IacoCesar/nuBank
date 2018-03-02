import styled from 'styled-components'
import colors from 'app/theme/colors'
import { TextMask } from 'react-native-masked-text'

export const Content = styled.View`
    display: flex;
    ${props =>
        props.marginLeft && `
        margin-left: ${props.marginLeft};
    `};

    ${props =>
        props.toCenter && `
            align-items: center;
    `};

    ${props =>
        props.toLeft && `
            align-items: flex-start;
    `};

    ${props =>
        props.toRight && `
            align-items: flex-end;
    `};

    justify-content: center;
`

export const Label = styled.Text`
    ${props =>
      props.margin && `
        margin-top: ${props.margin};
        margin-bottom: ${props.margin};
    `}
    ${props =>
      props.fontWeight && `
        font-weight: ${props.fontWeight};
    `}

    font-size: ${props => {
      if (props.fontSize) return props.fontSize
      return '12'
    }};

    ${props =>
      props.fontSize && `
        font-size: ${props.fontSize};
    `}

    ${props =>
    props.color && `
        color: ${props.color};
    `}

    ${props =>
      props.fontFamily && `
        ${props.fontFamily};
    `}
`
export const LabelMask = styled(TextMask)`
    ${props =>
      props.margin && `
        margin-top: ${props.margin};
        margin-bottom: ${props.margin};
    `}
    ${props =>
      props.fontWeight && `
        font-weight: ${props.fontWeight};
    `}

    font-size: ${props => {
      if (props.fontSize) return props.fontSize
      return '12'
    }};

    ${props =>
    props.color && `
        color: ${props.color};
    `}

    ${props =>
      props.fontFamily && `
        ${props.fontFamily};
    `}
`
