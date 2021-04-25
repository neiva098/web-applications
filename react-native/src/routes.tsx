
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './pages/login'
import Home from './pages/home'

export default createAppContainer(
    createSwitchNavigator({
        routeLogin: Login,
        routeHome: Home
    })
)