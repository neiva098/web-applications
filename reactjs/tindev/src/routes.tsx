import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/login'
import Home from './pages/home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dev/:id" component={Home} />
        </BrowserRouter>
    )
}