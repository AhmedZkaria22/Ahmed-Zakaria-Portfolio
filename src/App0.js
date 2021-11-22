import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Portfolio.css';
import Landing from './Components/Landing';
import Projects from './Components/Projects';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App0() {    
  return (
    // <Router basename="#">
      <div className={'App'}>
        <Landing />
        {/* <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/Projects" component={Projects} />                
        </Switch> */}
      </div>
    /* </Router> */
  );
}

export default App0;