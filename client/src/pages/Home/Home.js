import React, { Component } from "react";
import { Botton, Container } from "reactstrap";
import "./style.css";
import API from "../../utils/API";
import { compareAsc } from "date-fns";
import TopNav from "../../components/TopNav";


class Home extends Component {

    state = {
        loggedIn: false,
        joke: ""
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
            <div className = "Home">
                <TopNav />
                <Container>
                    
                    
                </Container>
                
            </div>
        );
    }
}

export default Home; 