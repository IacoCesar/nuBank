import { withHandlers, withState, hoistStatics, compose, withProps, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import { offers } from 'app/queries'
import { graphql } from 'react-apollo'
import { AsyncStorage } from 'react-native'
import { AccountScreen } from './AccountScreen'

export default hoistStatics(
    compose(
        graphql(offers, {name: 'offers'}),
        withProps(({ offers }) => ({
            offers: offers
        })),
        lifecycle({
            componentWillMount() {
                this.props.navigation.navigate('DrawerOpen')
            }
        })
    )
)(AccountScreen)
