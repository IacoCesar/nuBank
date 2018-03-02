import React, { Component } from 'react'
import StatusBar from 'app/components/StatusBar'
import SpacerView from 'app/components/Spacer'
import CardImage from 'app/components/CardList/CardImage'
import Container from 'app/components/Container'
import Content from 'app/components/Content'
import * as FieldComponents from 'app/components/FieldComponents'
import { StyleSheet, View, Text, Image, Alert } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';
import colors from 'app/theme/colors'
import fonts from 'app/theme/fonts'
import { ProgressDialog, Dialog } from 'react-native-simple-dialogs';

export const StoreScreen = ({
    navigation, toggleMutation, dataPaymentSuccess, setdataPaymentSuccess, setPaymentProcess, paymentProcess
}) => {
    const {state} = navigation

    return (
        <Container>
            <Dialog
                visible={paymentProcess && !dataPaymentSuccess ? true : false} >
                <View>
                    <FieldComponents.Label
                    label={'Processing payment!'}
                    color={colors.nuViolet}
                    fontSize={18}
                    toCenter={true}
                    fontFamily={fonts.openSansSemibold}
                    />
                    <FieldComponents.Spacer min={25} max={35} />
                    <Content directionLine={true}>
                        <FieldComponents.Loading
                         color={colors.nuVioletDark}
                         size="large"
                        />
                        <FieldComponents.Label
                        label={'Please, wait...'}
                        color={colors.nuVioletDark}
                        fontSize={13}
                        marginLeft={10}
                        fontFamily={fonts.openSansSemibold}
                        />
                    </Content>
                    <FieldComponents.Spacer min={10} max={20} />
                </View>
            </Dialog>
            <Dialog
             visible={!paymentProcess && dataPaymentSuccess ? true :  false }
             onTouchOutside={() => { setdataPaymentSuccess(null) }} >
                <View>
                    <FieldComponents.Label
                    label={dataPaymentSuccess && dataPaymentSuccess.data.purchase.success ? 'Successful purchasing!' : dataPaymentSuccess && dataPaymentSuccess.data.purchase.errorMessage}
                    color={colors.nuViolet}
                    fontSize={18}
                    toCenter={true}
                    fontFamily={fonts.openSansSemibold}
                    />
                    {dataPaymentSuccess && dataPaymentSuccess.data.purchase.success ?
                    <View>
                    <FieldComponents.Spacer min={15} max={20} />
                    <Content directionLine={true}>
                        <FieldComponents.Label
                        label={'Item purchased: '}
                        color={colors.nuVioletDark}
                        fontSize={13}
                        fontFamily={fonts.openSansSemibold}
                        />
                        <FieldComponents.Label
                        label={state.params && state.params.data && state.params.data.product.name}
                        color={colors.nuOrange}
                        fontSize={13}
                        fontWeight='bold'
                        fontFamily={fonts.openSansSemibold}
                        />
                    </Content>
                    <FieldComponents.Spacer min={15} max={20} />
                    <Content directionLine={true}>
                        <FieldComponents.Label
                        label={'Available balance: '}
                        color={colors.nuVioletDark}
                        fontSize={13}
                        fontFamily={fonts.openSansSemibold}
                        />
                        <FieldComponents.Label
                        label={dataPaymentSuccess && dataPaymentSuccess.data.purchase.customer.balance}
                        color={colors.nuGreen}
                        mask={true}
                        fontSize={13}
                        fontWeight='bold'
                        fontFamily={fonts.openSansSemibold}
                        />
                    </Content>
                    </View>
                    :
                    <View />
                    }
                </View>
            </Dialog>
            { state.params && state.params.data.product &&
                <View style={{ width: width(100), height: width(50),backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <CardImage
                     width={width(100)}
                     height={width(50)}
                     noBorder={true}
                     source={{uri: state.params.data.product.image}}
                    />
                </View>
            }
            { state.params && state.params.data ?
                <Content>
                    <FieldComponents.Spacer min={15} max={20} />
                    <FieldComponents.Label
                     mask={true}
                     fontSize={18}
                     toRight={true}
                     fontFamily={fonts.openSansSemibold}
                     color={colors.nuGreen}
                     label={state.params.data.price}
                    />
                    <FieldComponents.Spacer min={10} max={10} />
                    <FieldComponents.Label
                     fontSize={15}
                     color={colors.nuVioletDark}
                     fontFamily={fonts.openSansSemibold}
                     label={state.params.data.product.name}
                    />
                    <FieldComponents.Label
                     fontSize={15}
                     fontFamily={fonts.openSansRegular}
                     label={state.params.data.product.description}
                    />
                    <FieldComponents.Spacer min={15} max={20} />
                    <FieldComponents.Button
                      bkColor={colors.nuViolet}
                      color={colors.white}
                      label="Buy"
                          onPress={toggleMutation}
                    />
                </Content>
                :
                <Content loading={true}>
                    <FieldComponents.Loading
                     color="#4dd2ff"
                     size="large"
                    />
                </Content>
            }
        </Container>
    )
}
