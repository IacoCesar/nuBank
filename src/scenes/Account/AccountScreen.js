import React, { Component } from 'react'
import * as FieldComponents from 'app/components/FieldComponents'
import Container from 'app/components/Container'
import Content from 'app/components/Content'
import StatusBar from 'app/components/StatusBar'
import colors from 'app/theme/colors'
import fonts from 'app/theme/fonts'
import Spacer from 'app/components/Spacer'

export const AccountScreen = ({
    offers, navigation
}) => {
    return (
        <Container>
            <Content>
                { offers.viewer &&
                    <Content loading={true} directionColumn={true}>
                    <FieldComponents.Label
                        label={offers.viewer.name}
                        color={colors.nuViolet}
                        fontSize={25}
                        toCenter={true}
                        fontFamily={fonts.openSansSemibold}
                    />
                    <Spacer min={10} max={10}/>
                    <FieldComponents.Label
                        mask={true}
                        label={offers.viewer.balance}
                        color={colors.nuGreen}
                        fontSize={18}
                        toCenter={true}
                        fontFamily={fonts.openSansSemibold}
                    />
                    </Content>
                }
                { offers.loading &&
                    <Content loading={true}>
                        <FieldComponents.Loading
                         color={colors.nuVioletDark}
                         size="large"
                        />
                    </Content>
                }
            </Content>
         </Container>
    )
}
