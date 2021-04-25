
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotAuthorized from '../pages/messages/NotAuthorized'
import NotFound from '../pages/messages/NotFound'
import React from 'react'
import LogIn from '../pages/User/LogIn'
import { PrivateRoute } from './types'
import UserHome from "../pages/User/UserHome";
import Home from '../pages/Home'
import AddressCreate from '../pages/Address/Create'
import UserCreate from '../pages/User/Create'
import AppointamentCreate from '../pages/Apointtament/Create'
import ListPatients from '../pages/User/Patient/List'
import ListEmployees from '../pages/User/Employee/List'
import ListAppointaments from '../pages/Apointtament/List'
import ListAddresses from '../pages/Address/List'
import ListAppointamentsMedic from '../pages/Apointtament/Medic'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/address/create' component={AddressCreate}></Route>
                <Route exact path="/apointtament/create" component={AppointamentCreate}></Route>
                <Route exact path='/user/login' component={LogIn}></Route>
                <PrivateRoute exact path="/user/home" Component={UserHome}></PrivateRoute>
                <PrivateRoute exact path="/user/patient/list" Component={ListPatients}></PrivateRoute>
                <PrivateRoute exact path="/user/employee/list" Component={ListEmployees}></PrivateRoute>
                <PrivateRoute exact path="/user/appointaments/list" Component={ListAppointaments}></PrivateRoute>
                <PrivateRoute exact path="/user/addresses/list" Component={ListAddresses}></PrivateRoute>
                <PrivateRoute exact path="/user/medic/appointaments/list" Component={ListAppointamentsMedic}></PrivateRoute>
                <PrivateRoute exact path="/user/create" Component={UserCreate}></PrivateRoute>
                <Route exact path='/unauthorized' component={NotAuthorized} />
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
