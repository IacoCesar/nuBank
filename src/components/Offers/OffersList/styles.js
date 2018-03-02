import styled from 'styled-components/native'

export const FlatList = styled.FlatList`
`

export const Content = styled.View `
 display: flex;
 flex-direction: column;
 backgroundColor: transparent;

 ${props => props.width && `
     width: ${props.width};
 `};

 ${props => props.marginLeft && `
     margin-left: ${props.marginLeft};
 `};
`
