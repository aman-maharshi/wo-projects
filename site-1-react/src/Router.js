import React from "react"
import { HashRouter, Switch, Route } from "react-router-dom"
import App from "./App"
import RealWeddingsPage from "./components/RealWeddingsPage"
import NotFoundPage from "./components/NotFoundPage"
import RealWeddingsImageGallary from "./components/RealWeddingsImageGallary"

function Router() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact>
                    <App />
                </Route>
                <Route path="/real-weddings" exact>
                    <RealWeddingsPage />
                </Route>
                <Route path="/real-weddings/:id" exact>
                    <RealWeddingsImageGallary />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default Router
