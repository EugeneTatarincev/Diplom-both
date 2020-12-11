import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Main from './pages/Main'
import {AuthPage} from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/greenhouse" exact>
          <Main />
        </Route>
        <Redirect to="/greenhouse" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}