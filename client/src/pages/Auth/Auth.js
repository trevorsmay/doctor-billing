import React, { Component } from "react";
import Login from "../../components/Login";
import SignUp from "../../components/Signup";
import UserInfo from "../../components/UserInfo";
import API from "../../utils/API";
import "./Auth.css";

class Auth extends Component {

    state = {
        loggedIn: false,
        username: "",
        password: "",
        confirmPassword: "",
        type: "",
        message: "Welcome to Biller Pro"
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
                type: this.state.type
            }).then(user => {
                console.log(user);
                if (user.data.loggedIn) {
                    this.setState({
                        loggedIn: true,
                        user: user.data.user
                    });
                    console.log("log in successful");
                    window.location.href = "./doctorpage";
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
                // type: this.state.type
            }).then(user => {
                console.log(user);
                if (user.data.loggedIn) {
                    this.setState({
                        loggedIn: true,
                        user: user.data.user
                    });
                    console.log("log in successful");
                    window.location.href = "./accountpage";
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
                type: this.state.type.doctor
            }).then(user => {
                if(user.date.loggIn) {
                    this.setState({
                        loggedIn: true,
                        user: user.data.user
                    });
                    console.log("doctor login successful");
                    window.location.href = "./DoctorPage";
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
                type: this.state.type
            }).then(user => {
                if(user.date.loggIn) {
                    this.setState({
                        loggedIn: true,
                        user: user.data.user
                    });
                    console.log("accountant login successful");
                    window.location.href = "./AccountPage";
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

    handleInfoSubmit = event => {
        event.preventDefault();
        if(this.state.bodyType && this.state.goals) {

        }
    }

    render() {
        return (
            <div className="authBox">
                {(this.props.action === "login") ? (
                    <Login
                    username={this.state.username}
                    password={this.state.password}
                    handleDocLogin={this.handleDocLogin}
                    handleActLogin={this.handleActLogin}
                    handleInputChange={this.handleInputChange}
                    message={this.state.message}
                    />
                ) : (this.props.action === "signup") ? (
                    <SignUp
                    username={this.state.username}
                    handleUserInfo={this.state.handleUserInfo}
                    confirmPassword={this.state.confirmPassword}
                    handleDocSignup={this.handleDocSignup}
                    handleActSignup={this.handleActSignup}
                    handleInputChange={this.handleInputChange}
                    message={this.state.message}
                    />
                ): <UserInfo
                    username={this.state.username}
                    handleUserInfo={this.state.handleUserInfo}
                    doctor={this.state.doctor}
                    accountant={this.state.accountant}
                />

                }
            </div>
        )
    }
}

export default Auth;


