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
        serviceCost: "",
    };
    
    componentDidMount() {
        this.loadPatients();
    }

    loadPatients = () => {
        API.getPatients()
        .then(res => 
            this.setState({ patients: res.data, patientNumber: "", serviceCost: "" })
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
        if (this.state.patientNumber && this.state.serviceCost) {
            API.savePatient({
                patientNumber: this.state.patientNumber,
                serviceCost: this.state.serviceCost,
            })
            .then(res => this.loadPatients())
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container className="patient-container">
                <Row>
                    <Col xs="6">
                <h2 className="loginTitle title-font">Enter Patient Information</h2>
                <hr />
                {this.props.message?(
                    <Alert className="animated fadeIn" color="danger">{this.props.message}</Alert>
                ): (<></>)}
                <form>
                    <FormGroup>
                        <Label for="number">Patient Number</Label>
                        <Input name="patientNumber" id="customerNumber" placeholder="Number" value={this.state.patientNumber} onChange={this.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="">Total Cost of Service</Label>
                        <Input name="serviceCost" id="serviceCost" placeholder="Service Cost" value={this.state.serviceCost} onChange={this.handleInputChange}  />
                    </FormGroup>
                    <FormBtn disabled={!(this.state.patientNumber && this.state.serviceCost)} onClick={this.handleFormSubmit}>
                    Submit Information
                    </FormBtn>
                </form>
                </Col>
                <Col xs="6">
                <Jumbotron>
                <h1>Patients</h1>
                </Jumbotron>
                    {this.state.patients.length ? (
                        <List>
                            {this.state.patients.map(patient => (
                                <ListItem key={patient._id}>
                                <Link to={"/profile/" + patient._id }>
                                    <strong>
                                        {patient.patientNumber}, ${patient.serviceCost}
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