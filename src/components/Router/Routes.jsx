import {
  Route,
  Switch,
} from "react-router-dom";
import Frontpage from '../pages/Frontpage/Frontpage'
import { LoginPage } from "../pages/Login/Loginpage";
import { Salespage } from "../pages/Salespage/Salespage";

export function Routes () {

  return(
      <Switch>
          <Route exact path="/">
              <Frontpage />
          </Route>
          
          <Route exact path="/salespage">
              <Salespage />
          </Route>

          {/* <Route exact path="/sales">
                <Sales/>
            </Route> */}

            <Route exact path="/loginpage">
                <LoginPage/>
            </Route>
      </Switch>
  )
}