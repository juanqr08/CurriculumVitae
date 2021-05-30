import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CurriculumVitae from "./components/cv";
import './App.scss';

function App() {
  return (
    <Router>
      <div className="contentRoot">
        <Switch>
          <Route path="/" exact>
            <CurriculumVitae />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
