import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from "./App"
import RealWeddingsPage from "./components/RealWeddingsPage"
import NotFoundPage from "./components/NotFoundPage"

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <App />
                </Route>
                <Route path="/real-weddings">
                    <RealWeddingsPage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
