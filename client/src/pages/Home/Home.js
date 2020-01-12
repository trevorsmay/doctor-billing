import React, { Component } from "react";
import { Container } from "reactstrap";
import "./style.css";
import API from "../../utils/API";
// import { compareAsc } from "date-fns";
import TopNav from "../../components/TopNav";
import Banner from "../../components/Banner";
import ProfileBox from "../../components/ProfileBox";
import Auth from "../Auth";

class Home extends Component {
    state = {
        loggedIn: false,
        joke: "You're a joke."
    };

    componentDidMount() {
        this.docLoggedIn();
        this.accountLoggedIn();
    }

    docLoggedIn = () => {
        API.isDocLoggedIn().then(user => {
            if(user.data.docLoggedIn) {
                this.setState({
                    docLoggedIn: true
                })
            }
        })
    }

    accountLoggedIn = () => {
        API.isAccountLoggedIn().then(user => {
            if(user.data.accountLoggedIn) {
                this.setState({
                    accountLoggedIn: true
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
                <Auth />
                <ProfileBox />
                </Container>
            </div>
        );
    }
}

export default Home; 