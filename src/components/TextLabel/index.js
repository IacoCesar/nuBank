import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Content, Label, LabelMask } from './styles'
import fonts from 'app/theme/fonts'

class TextLabel extends Component {
    render() {
    const {
      label,
      color,
      fontSize,
      fontFamily,
      toUpperCase,
      fontWeight,
      margin,
      isClickable,
      clickableFunc,
      mask,
      lineLimit,
      toRight,
      toCenter,
      toLeft,
      marginLeft
    } = this.props

        return (
            <Content marginLeft={marginLeft} toLeft={toLeft} toCenter={toCenter} toRight={toRight}>
                {isClickable && label ?
                <TouchableOpacity
                 onPress={clickableFunc}
                >
                    <Label
                    color={color}
                    fontSize={fontSize}
                    fontFamily={fontFamily}
                    fontWeight={fontWeight}
                    margin={margin}
                    >
                        {toUpperCase ? label.toUpperCase() : label}
                    </Label>
                </TouchableOpacity>
                :
                    !mask ?
                    <Label
                      color={color}
                      fontSize={fontSize}
                      fontFamily={fontFamily}
                      fontWeight={fontWeight}
                      margin={margin}
                      numberOfLines={lineLimit}
                    >
                        {toUpperCase ? label.toUpperCase() : label}
                    </Label>
                    :
                    <LabelMask
                     color={color}
                     fontSize={fontSize}
                     fontFamily={fontFamily}
                     fontWeight={fontWeight}
                     type={'money'}
                     options={{
                         unit: 'US $',
                         separator: ',',
                         delimiter: '.',
                         precision: 2
                     }}
                     ref={'myDateText'}
                     editable={false}
                     value={label}
                    />
                }
            </Content>
        )
    }
}

export default TextLabel
