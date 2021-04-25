
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotAuthorized from '../pages/messages/NotAuthorized'
import NotFound from '../pages/messages/NotFound'
import React from 'react'
import LogIn from '../pages/LogIn'
import { PrivateRoute } from './types'
import PropertieCreate from '../pages/Propertie/Create'
import ListPropertie from '../pages/Propertie/List'
import ExpandedPropertie from '../pages/Propertie/Expanded'
import Home from "../pages/Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LogIn}></Route>
                <PrivateRoute exact path="/home" Component={Home}></PrivateRoute>
                <PrivateRoute exact path='/propertie/list' Component={ListPropertie}></PrivateRoute>
                <PrivateRoute exact path='/propertie/details/:id' Component={ExpandedPropertie}></PrivateRoute>
                <PrivateRoute exact path='/propertie/create' Component={PropertieCreate}></PrivateRoute>
                <Route exact path='/unauthorized' component={NotAuthorized} />
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
