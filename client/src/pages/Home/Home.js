import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import "./style.css";
import API from "../../utils/API";
// import { compareAsc } from "date-fns";
import TopNav from "../../components/TopNav";
import Banner from "../../components/Banner";
import ProfileBox from "../../components/ProfileBox";
import Login from "../../components/Login";

class Home extends Component {
    state = {
        loggedIn: false,
        joke: "You're a joke."
    };

    componentDidMount() {
        this.loggedIn();
    }

    loggedIn = () => {
        API.isDocLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true 
                });
            }
            })
        API.isAccountLoggedIn().then(user => {
            if(user.data.loggedIn) {
                this.setState({
                    loggedIn: true
                })
            }
        }).catch(err => {
            console.log(err);
        })   
            
            
    }

    render() {
        return (
            <div className = "Home">
                <TopNav />
                <Container>
                <Banner />
                <ProfileBox />
                </Container>
            </div>
        );
    }
}

export default Home; 