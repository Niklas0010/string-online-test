import {
  Route,
  Switch,
} from "react-router-dom";
import Frontpage from '../pages/Frontpage/Frontpage'
import {Login} from '../Login/Login'


export function Routes () {

  return(
      <Switch>
          <Route exact path="/">
              <Frontpage />
          </Route>

          {/* <Route exact path="/sales">
                <Sales/>
            </Route> */}

            <Route exact path="/login">
                <Login/>
            </Route>
      </Switch>
  )
}