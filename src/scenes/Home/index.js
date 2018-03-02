import { withHandlers, withState, hoistStatics, compose, withProps } from 'recompose'
import { withApollo } from 'react-apollo'
import { offers } from 'app/queries'
import { graphql } from 'react-apollo'
import { HomeScreen } from './HomeScreen'
import { AsyncStorage } from 'react-native'

export default hoistStatics(
    compose(
        graphql(offers, {name: 'offers'}),
        withState('refreshList', 'setRefreshList', false),
        withState('selectedItemList', 'setSelectedItemList'),
        withHandlers({
            goToPayment: ({
                item,
                selectedItemList,
                setSelectedItemList,
                navigation: { navigate },
            }) => ({item}) => {
                navigate('Payment', {data: item})
            },
            updateOffersList: ({
                setRefreshList,
            }) => async () => {
                await graphql(offers, {name: 'offers'})
                setRefreshList(false)
            }
        }),
        withProps(({ offers }) => ({
            offers: offers
        }))
    )
)(HomeScreen)
