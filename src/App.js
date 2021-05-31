import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CurriculumVitae from "./components/cv";
import './App.scss';

function App() {

  useEffect(() => {
    document.title = 'Hoja de Vida'
  }, [])

  return (
    <Router>
      <div className="contentRoot">
        <Switch>
          <Route path="" strict="false" exact>
            <CurriculumVitae />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
