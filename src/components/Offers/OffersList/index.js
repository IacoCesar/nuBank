import React, { Component } from 'react'
import CardContainer from 'app/components/CardList/CardContainer'
import CardContent from 'app/components/CardList/CardContent'
import CardImage from 'app/components/CardList/CardImage'
import * as FieldComponents from 'app/components/FieldComponents'
import { FlatList, Content } from './styles'
import {View, Text, Image, RefreshControl, TouchableOpacity, Alert} from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';
import fonts from 'app/theme/fonts'
import colors from 'app/theme/colors'

class OffersList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            refreshing: false
        }
    }

    _onRefresh() {
        const {
            updateOffersList,
            refreshList,
            setRefreshList,
        } = this.props

        if(refreshList)
            return

        setRefreshList(true)
    }


    render() {
        const {
          data,
          goToPayment,
          setSelectedItemList
        } = this.props
        let dateValue

        // this.refs.myDateText.state.value
        return(
            <FlatList
                onEndReachedThreshold={5}
                ref={offersList => this.refs.offersList = offersList}
                data={ data.offers }
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) =>
                    <CardContainer white>
                        <TouchableOpacity onPress={() => {
                            goToPayment({item})
                         }}
                        >
                            <CardContent>
                                <CardImage
                                    source={{uri: item.product.image}}
                                />
                                <Content width={width(50)} marginLeft={width(5)}>
                                    <FieldComponents.Label
                                    mask={true}
                                    label={item.price}
                                    lineLimit={2}
                                    fontSize={16}
                                    color={colors.nuGreen}
                                    fontFamily={fonts.openSansSemibold}
                                    />
                                    <FieldComponents.Label
                                    label={item.product.name}
                                    lineLimit={2}
                                    fontSize={12}
                                    color={colors.nuVioletDark}
                                    fontFamily={fonts.openSansSemibold}
                                    />
                                    <FieldComponents.Label
                                    label={item.product.description}
                                    lineLimit={2}
                                    fontSize={12}
                                    fontFamily={fonts.openSansRegular}
                                    />
                                </Content>
                            </CardContent>
                        </TouchableOpacity>
                    </CardContainer>
                }
                refreshControl={
                    <RefreshControl
                        colors={["#9Bd35A", "#689F38"]}
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
            />
        )
    }
}

export default OffersList
