import { withHandlers, withState, hoistStatics, compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import { payment } from 'app/queries'
import { graphql } from 'react-apollo'
import { StoreScreen } from './StoreScreen'
import { AsyncStorage } from 'react-native'

export default hoistStatics(
    compose(
        withState('dataPaymentSuccess', 'setdataPaymentSuccess'),
        withState('paymentProcess', 'setPaymentProcess', false),
        withProps(({ navigation }) => ({
            offerId: navigation.state.params.data.id
        })),
        graphql(payment),
        withHandlers({
            toggleMutation: ({ mutate, offerId, setdataPaymentSuccess, setPaymentProcess }: { mutate: Function }): Function => {
                setPaymentProcess(true)
                return (): Promise<any> => {
                    return mutate({
                        variables: {
                            offerId
                        },
                    }).then((data) => {
                        setdataPaymentSuccess(data)
                        console.log('Return value',data)
                        setPaymentProcess(false)
                    }).catch((e) => {
                        console.error('Error', e)
                    })
                }
            }
        })
        )
)(StoreScreen)
