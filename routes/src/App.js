
import './App.css';
import {Route} from "react-router-dom"
import Page2 from "./Page2"
import Page1 from './Page1';
import Home from './Home';
import {Switch} from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2/:id" component={Page2} />
      <Route path="/" render={()=>(<div>404</div>)} />
    </Switch>
  );
}

export default App;
