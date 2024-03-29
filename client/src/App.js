import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";


function App() {
  return (
    
    <Router>
      <div>
<TopNav />
        <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
              <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/profile" component={Profile} />
              <Route exaxt path="/profile/:id" component= {Detail} />
              <Route component= {NoMatch} />
        </Switch>
        <Footer />
        </div>
    </Router>
    
  );
}

export default App;
