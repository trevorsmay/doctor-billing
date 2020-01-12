import React, { Component } from "react";
import Login from "../../components/Login";
import DocLogin from "../../components/DocLogin";
import SignUp from "../../components/Signup";
import API from "../../utils/API";
import "./Auth.css";


class Auth extends Component {

    state = {
        loggedIn: false,
        username: "",
        password: "",
        confirmPassword: "",
        userType: false,
        message: ""
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleUserInfo = event => {
        event.preventDefault();
    }

    handleDocLogin = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.docLogin({
                username: this.state.username,
                password: this.state.password,
                userType: this.state.userType
            }).then(user => {
                console.log(user);
                if (user.data.docLoggedIn) {
                    this.setState({
                        docLoggedIn: true,
                        user: user.data.user,
                        userType: true
                    });
                    console.log("login successful");
                    window.location.href = "/doctorpage";
                }
                else if (user.data.message) {
                    this.setState({
                        message: user.data.message
                    })
                }
            });
        }
    }

    handleActLogin = event => {
        event.preventDefault();
        if (this.state.username && this.state.password ) {
            API.actLogin({
                username: this.state.username,
                password: this.state.password,
                userType: this.state.userType
            }).then(user => {
                console.log(user);
                if (user.data.accountLoggedIn) {
                    this.setState({
                        accountLoggedIn: true,
                        user: user.data.user,
                        userType: false
                    });
                    console.log("log in successful");
                    window.location.href = "/accountpage";
                }
                else if (user.data.message) {
                    this.setState({
                        message: user.data.message
                    })
                }
            });
        }
    }

    handleDocSignup = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.docSignup({
                username: this.state.username,
                password: this.state.password,
                userType: this.state.userType
            }).then(user => {
                if(user.date.docLoggedIn) {
                    this.setState({
                        docLoggedIn: true,
                        user: user.data.user,
                        userType: true
                    });
                    console.log("doctor login successful");
                    window.location.href = "/doctorpage";
                } else {
                    console.log("error")
                    console.log(user.data);
                    this.setState({
                        message: user.data
                    })
                }
            });
        }
    }

    handleActSignup = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.docSignup({
                username: this.state.username,
                password: this.state.password,
                userType: this.state.userType
            }).then(user => {
                if(user.date.accountLoggedIn) {
                    this.setState({
                        accountLoggedIn: true,
                        user: user.data.user,
                        userType: false
                    });
                    console.log("accountant login successful");
                    window.location.href = "/accountpage";
                } else {
                    console.log("error")
                    console.log(user.data);
                    this.setState({
                        message: user.data
                    })
                }
            });
        }
    }

    // handleInfoSubmit = event => {
    //     event.preventDefault();
    //     if(this.state.bodyType && this.state.goals) {

    //     }
    // }

    render() {
        return (
            <div className="authBox">
                {(this.props.action === "login") ? (
                    <Login
                    username={this.state.username}
                    password={this.state.password}
                    handleActLogin={this.handleActLogin}
                    handleInputChange={this.handleInputChange}
                    message={this.state.message}
                    />
                ) : (this.props.action === "doclogin") ? (
                    <DocLogin
                    username={this.state.username}
                    password={this.state.password}
                    handleDocLogin={this.handleDocLogin}
                    handleInputChange={this.handleInputChange}
                    message={this.state.message}
                    />
                ) :  <SignUp
                    username={this.state.username}
                    handleUserInfo={this.state.handleUserInfo}
                    confirmPassword={this.state.confirmPassword}
                    handleDocSignup={this.handleDocSignup}
                    handleActSignup={this.handleActSignup}
                    handleInputChange={this.handleInputChange}
                    message={this.state.message}
                    />
            
                }
            </div>
        );
    }
        
}

export default Auth;


