import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import { Container } from 'reactstrap';
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <>
<TopNav />
      <Container>
        <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
              <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/profile" component={Profile} />
              {/* <Route exact path="/doclogin" render={(props) => <Auth {...props} action="login" /> } /> */}
              {/* <Route exact path="/dpage" component={DPage} render = {(props) => <DPage { ... props} /> } />
              <Route exact path="/apage" component={APage} render = {(props) => <APage {...props} /> } /> */}
              {/* <Route exact path = "/UserInfo" render = {(props) => <UserInfo {...props} />}/> */}
              <Route component= {NoMatch} />
        </Switch>
        </Container>
        <Header />
        <Footer />
      </>
    </Router>
  );
}

export default App;
