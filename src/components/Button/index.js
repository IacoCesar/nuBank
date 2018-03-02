import React, { Component } from 'react'
import {View, Text, TouchableOpacity, Alert} from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';
import { ButtonContainer, ButtonView } from './styles'
import * as FieldComponents from 'app/components/FieldComponents'
import fonts from 'app/theme/fonts'
import colors from 'app/theme/colors'

class ButtonClick extends Component {
    constructor(props) {
        super(props)

        this.state = {
            refreshing: false
        }
    }

    render() {
        const {
          onPress,
          label,
          bkColor,
          color
        } = this.props

        return(
            <ButtonContainer>
                <TouchableOpacity onPress={onPress}
                >
                    <ButtonView bkColor={bkColor}>
                        <FieldComponents.Label
                         label={label}
                         fontSize={14}
                         color={color}
                         fontFamily={fonts.openSansBold}
                        />
                    </ButtonView>
                </TouchableOpacity>
            </ButtonContainer>
        )
    }
}

export default ButtonClick
