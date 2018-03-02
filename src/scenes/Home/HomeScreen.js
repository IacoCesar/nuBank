import React, { Component } from 'react'
import * as FieldComponents from 'app/components/FieldComponents'
import Container from 'app/components/Container'
import Content from 'app/components/Content'
import StatusBar from 'app/components/StatusBar'
import colors from 'app/theme/colors'

export const HomeScreen = ({
    selectedItemList, saveInfo, setSelectedItemList, goToPayment, refreshList, setRefreshList, updateOffersList, offers
}) => {
    return (
        <Container>
            <StatusBar dark margin/>
            { offers.viewer &&
                <FieldComponents.Offers
                 refreshList={refreshList}
                 setRefreshList={setRefreshList}
                 updateOffersList={updateOffersList}
                 data={offers.viewer}
                 goToPayment={goToPayment}
                 setSelectedItemList={setSelectedItemList}
                />
            }
            { offers.loading &&
                <Content loading={true}>
                    <FieldComponents.Loading
                     color={colors.nuVioletDark}
                     size="large"
                    />
                </Content>
            }
         </Container>
    )
}
