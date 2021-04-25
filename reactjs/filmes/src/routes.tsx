import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/header'
import Erro from './components/erro'
import Filme from './pages/Filme'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/filme/:id' component={Filme} />
                <Route path='*' component={Erro}></Route>
            </Switch>
        </BrowserRouter>
    )
}