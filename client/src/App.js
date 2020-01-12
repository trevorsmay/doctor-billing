import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import DPage from "./pages/DPage";
import APage from "./pages/APage";
import Auth from "./pages/Auth";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <>

      <div>
        <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
              <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/doclogin" render={(props) => <Auth {...props} action="login" /> } />
              <Route exact path="/dpage" component={DPage} render = {(props) => <DPage { ... props} /> } />
              <Route exact path="/apage" component={APage} render = {(props) => <APage {...props} /> } />
              {/* <Route exact path = "/UserInfo" render = {(props) => <UserInfo {...props} />}/> */}
              {/* <Route component= {NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
      </>
    </Router>
  );
}

export default App;
