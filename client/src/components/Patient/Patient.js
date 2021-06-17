import React, { Component } from "react";
import {  FormGroup, Label, Alert, Container, Col, Row, Jumbotron } from 'reactstrap';
import API from "../../utils/API";
import { Input, FormBtn } from "../Form/index";
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn/index";
import{ List, ListItem } from "../List/index";

class Patient extends Component {
    state = {
        patients: [],
        patientNumber: "",
    };
    
    componentDidMount() {
        this.loadPatients();
    }

    loadPatients = () => {
        API.getPatients()
        .then(res => 
            this.setState({ patients: res.data, patientNumber: "" })
            )
            .catch(err => console.log(err));
    };

    deletePatient = id => {
        API.deletePatient(id) 
        .then(res => this.loadPatients())
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name , value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.patientNumber) {
            API.savePatient({
                patientNumber: this.state.patientNumber,
            })
            .then(res => this.loadPatients())
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                <h2 className="loginTitle title-font">Enter Patient Information</h2>
                <hr />
                {this.props.message?(
                    <Alert className="animated fadeIn" color="danger">{this.props.message}</Alert>
                ): (<div></div>)}
                <form>
                    <FormGroup>
                        <Label for="number">Patient Number</Label>
                        <Input value={this.state.patientNumber} onChange={this.handleInputChange}  name="patientNumber" placeholder="Number"  />
                    </FormGroup>
                    <FormBtn disabled={!(this.state.patientNumber)} onClick={this.handleFormSubmit}>
                    Submit Information
                    </FormBtn>
                </form>
                </Col>
                <Col size="md-6 sm-12">
                <Jumbotron>
                <h1>Patients</h1>
                </Jumbotron>
                    {this.state.patients.length ? (
                        <List>
                            {this.state.patients.map(patient => (
                                <ListItem key={patient._id}>
                                <Link to={"/profile/" + patient._id }>
                                    <strong>
                                        {patient.patientNumber}
                                    </strong>
                                </Link>
                                <DeleteBtn onClick={() => this.deletePatient(patient._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No results</h3>
                    )}
                </Col>
                </Row>
            </Container>
        );
    }
}

export default Patient;