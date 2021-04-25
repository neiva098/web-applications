import { Route, Redirect } from "react-router-dom"
import { isUserAutheticated } from "../services/auth"
import React from "react"

export const PrivateRoute = ({ Component, ...rest }: any) => {
    return (
        <Route {...rest} render={(props) => {
            return (
                isUserAutheticated() ? (
                    <Component {...props} />
                ) : (
                        <Redirect to="/unauthorized" />
                    )
            )
        }} />
    )
}