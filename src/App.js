import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./components/Navigation/SideBar";
import JobPage from "./components/Job/JobPage";
import HomePage from "./components/Home/HomePage";

import "./style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <SideBar />
        </div>
        <div className="contentPage">
          <Switch>
            <Route exact path="/job" component={JobPage} />
            {/* <Route exact path="/freelancer" component={FreelancerPage} /> */}
            {/* <Route exact path="/community" component={CommunityPage} />*/}
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;