import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import Header from "../../components/Header";
import IntroCard from "../../components/IntroCard";




class Home extends Component {

  state = {
    loggedIn: false,
  };

  componentDidMount() {
    this.loggedIn();
  }

  loggedIn = () => {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="homeBox">
        {this.state.loggedIn}
        <Header />
        <IntroCard />
  
      </div>
    );
  }
}

export default Home;