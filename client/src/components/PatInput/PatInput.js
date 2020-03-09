import React, { Component } from "react";
import {  FormGroup, Label, Alert, Container, Col, Row, Jumbotron } from 'reactstrap';
// import { Row, Col } from "react-bootstrap";
import API from "../../utils/API";
import { Input, FormBtn } from "../Form/index";
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn/index";
import{ List, ListItem } from "../List/index";

class PatInput extends Component {
    state = {
        patientId: [],
        patientNumber: "",
        serviceCost: "",
        billStatus: ""
    };
    
    componentDidMount() {
        this.loadPatients();
    }

    loadPatients = () => {
        API.getPatients()
        .then(res => 
            this.setState({ patientId: res.data, patientNumber: "", serviceCost: "", billStatus: ""})
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
        if (this.state.serviceCost && this.state.billStatus) {
            API.savePatient({
                patientNumber: this.state.patientNumber,
                serviceCost: this.state.serviceCost,
                billStatus: this.state.billStatus
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
                    <FormGroup>
                        <Label for="">Bill Status</Label>
                        <Input type="select" name="billStatus" id="billStatus" placeholder="Treatment Code" value={this.state.billStatus} onChange={this.handleInputChange}>
                            <option value="blank"></option>
                            <option value="true">Paid</option>
                            <option value="false">Open</option>
                        </Input>
                    </FormGroup>
                    <FormBtn disabled={!(this.state.serviceCost && this.state.billStatus)} onClick={this.handleFormSubmit}>
                    Submit Information
                    </FormBtn>
                </form>
                </Col>
                <Col xs="6">
                <Jumbotron>
                <h1>Patients</h1>
                </Jumbotron>
                    {this.state.patientId.length ? (
                        <List>
                            {this.state.patientId.map(patient => (
                                <ListItem key={patient._id}>
                                <Link to={"/patient/" + patient._id}>
                                    <strong>
                                        {patient.patientNumber}, ${patient.serviceCost} and {patient.billStatus}
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

export default PatInput;

