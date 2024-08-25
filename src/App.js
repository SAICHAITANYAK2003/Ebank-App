import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import NotFound from './Components/NotFound'
// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ebank/login" component={Login} />
      <Route exact path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  </>
)

export default App
