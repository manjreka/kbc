import {Route, Switch, Redirect} from 'react-router-dom'
import MobileScreen from './Component/MobileScreen'
import MainScreen from './Component/MainScreen'

import './App.css'
import NotFound from './Component/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={MainScreen} />
    <Route exact path="/join" component={MobileScreen} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
