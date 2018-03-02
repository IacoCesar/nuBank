import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import React from 'react'
import { Platform, StatusBar } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome'
import { Icon } from 'react-native-elements'
import Pages from './pages'
import colors from 'app/theme/colors'
import { width, height, totalSize } from 'react-native-dimension';

export const NavBar = TabNavigator({
    Home: { screen: Pages.HomeScreen,
        navigationOptions: {
            tabBarVisible: false,
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name='home'
                  color={tintColor}
                  type='font-awesome' />
            )
        }
    }
},
    {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        backBehavior: false,
        tabBarOptions: {
            renderIndicator: () => null,
            showLabel: false,
            showIcon: true,
            activeTintColor: colors.white,
            tabStyle: {
                height: 40,
                padding: 0,
                margin : 0
            },
            iconStyle: {
                width:25,
                height:25,
                flexGrow: 0,
                padding: 0,
                margin: 0,
            },
            style: {
                backgroundColor: colors.nuVioletDark,
            }
        }
    }
)

export const MenuNavigator = DrawerNavigator({
  HomeComponent: { screen: NavBar }
}, {
  contentComponent: ({ navigation }) => (
      <Pages.AccountScreen navigation={navigation}/>
  ),
  drawerWidth: width(95),
  drawerPosition: 'left',
  useNativeAnimations : false,
  drawerBackgroundColor : 'white'
})

export const StackNav = StackNavigator({
    Home: { screen: MenuNavigator,
        navigationOptions: ({navigation}) => ({
            header: null,
            headerMode: 'none',
            headerTintColor: colors.white,
            headerStyle: {
                elevation: 2,
                backgroundColor: colors.nuVioletDark,
                paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
                height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight + 50
            },
        })
    },
    Payment: { screen: Pages.StoreScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Store',
            headerTintColor: colors.white,
            headerStyle: {
                elevation: 2,
                backgroundColor: colors.nuVioletDark,
                paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
                height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight + 50
            },
            headerTitleStyle :{},
        })
    }
},
{
    transitionConfig: () => ({
    	transitionSpec: {
    		duration: 70,
    	}
    })
})
