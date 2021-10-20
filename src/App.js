import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { Route } from "react-router";
import Homeplayer from "./player/homeplayer";
import Prev from "./player/Prev";
import Next from "./player/Next";
import {Switch} from "react-router-dom";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route path={"/"} exact component={Homeplayer} />
      <Route path={"/Prev"} component={Prev}/>
      <Route path={"/Next"} component={Next}/>
      </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App ;