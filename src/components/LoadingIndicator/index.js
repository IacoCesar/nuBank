import React, { Component } from 'react'
import { Loading, Content } from './styles'

class LoadingIndicator extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
          color,
          size
        } = this.props

        return(
            <Content>
                <Loading
                  color={color}
                  size={size}
                />
            </Content>
        )
    }
}

export default LoadingIndicator
