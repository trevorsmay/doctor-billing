import React, {Component} from "react";
import "./style.css";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom"
import API from "../../utils/API"
import Patient from "../../components/Patient/Patient";


class Profile extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true
    }

    componentDidMount() {

        this.loading();

        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                });
            }
        }).catch(err => {
            console.log(err);
        });

        console.log(this.props)
    }

    loading() {
        setTimeout(()=> {
            this.setState({
                loading: false
            })
        }, 100000)  
    }

    render() {
        return (
            <Container>
            <div className="profilePage">
                {this.state.loggedIn ? (
                    <div className="profileBox">
                        <h1 id="userTitle">Welcome back {this.state.user.username}!</h1>
                    </div>
                ) : (
                    <div className="noUser">
                        {!this.state.loading ? (
                            <div>
                                <h1>Please log in</h1>
                                <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                            </div>
                        ) : (
                            <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
                        )}
                    </div> 
                )}
                
                
            </div>
            <Patient />
            </Container>
             
        )
       
    }
    
}


export default Profile;