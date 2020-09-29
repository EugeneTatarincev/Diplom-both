import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import AboutUs from './pages/AboutUsPage'
import Main from './pages/Main'
import {AuthPage} from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/main" exact>
          <Main />
        </Route>
        <Redirect to="/main" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AboutUs />
      </Route>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}