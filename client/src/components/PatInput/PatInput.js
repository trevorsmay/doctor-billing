import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Alert, Container } from 'reactstrap';
// import { Link } from "react-router-dom";
// import API from "../../utls/API";

class PatInput extends Component {
    state = {
        validCustomerNumber: false,
        validCustomerName: false,
        validDateOfBirth: false,
        validTreatmentCode: false,
        validServiceCost: false,
        validBillStatus: false
    }
    
    componentDidUpdate() {
        this.validateCustomerInformation();
    }

    validateCustomerInformation() {
        if (this.props.customerNumber.length && this.props.customerName.length && this.state.dateBirth.length && this.state.treatmentCode.length && this.state.serviceCost.length && this.state.billStatus.length > 1) {
            this.setState({
                validCustomerNumber: true,
                validCustomerName: true,
                validDateOfBirth: true,
                validTreatmentCode: true,
                validServiceCost: true,
                validBillStatus: true
            });
        }
        if (this.props.customerNumber.length && this.props.customerName.length && this.state.dateBirth.length && this.state.treatmentCode.length && this.state.serviceCost.length && this.state.billStatus.length < 1) {
            this.setState({
                validCustomerNumber: false,
                validCustomerName: false,
                validDateOfBirth: false,
                validTreatmentCode: false,
                validServiceCost: false,
                validBillStatus: false
            });
        }
    }

    render() {
        return (
            <Container className="patient-container">
            <div>
                <h2 className="loginTitle title-font">Enter Patient Information</h2>
                <hr />
                {this.props.message?(
                    <Alert className="animated fadeIn" color="danger">{this.props.message}</Alert>
                ): (<></>)}
                <Form>
                    <FormGroup>
                        <Label for="number">Customer Number</Label>
                        <Input type="text" name="customerNumber" id="customerNumber" placeholder="Number" value={this.props.customerNumber} onChange={this.props.handleInputChange} valid={this.state.validCustomerNumber} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Customer Name</Label>
                        <Input type="text" name="customerName" id="customerName" placeholder="Name" value={this.props.customerName} onChange={this.props.handleInputChange} valid={this.state.validCustomerName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="">Date of Birth</Label>
                        <Input type="text" name="dateBirth" id="dob" placeholder="DOB" value={this.props.dateBirth} onChange={this.props.handleInputChange} valid={this.state.validDateOfBirth} />
                        <FormText></FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="">Treatment Code</Label>
                        <Input type="text" name="treatmentCode" id="treatmentCode" placeholder="Treatment Code" value={this.props.treatmentCode} onChange={this.props.handleInputChange} valid={this.state.validTreatmentCode} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="">Total Cost of Service</Label>
                        <Input type="text" name="serviceCost" id="serviceCost" placeholder="Service Cost" value={this.props.serviceCost} onChange={this.props.handleInputChange} valid={this.state.validServiceCost} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="">Bill Status</Label>
                        <Input type="select" name="select" id="billStatus" placeholder="Treatment Code" value={this.props.billStatus} onChange={this.props.handleInputChange} valid={this.state.validBillStatus}>
                            <option value="0">Select</option>
                            <option value="1">Paid</option>
                            <option value="2">Open</option>
                            </Input>
                    </FormGroup>
                    {/* if all fields are valid, allow the user to submit the form */}
                    {((this.state.validCustomerNumber && this.state.validUserName && this.state.validDateOfBirth && this.state.validTreatmentCode && this.state.validServiceCost && this.state.validBillStatus) !== false) ? (
                        <Button onClick={this.props.handlePatInput} color="danger" block>Submit Information</Button>
                    ) : (
                        <Button onClick={this.props.handlePatInput} color="dark" block>Submit Information</Button>
                    )}

                </Form>
            </div>
            </Container>
        );
    }
}

export default PatInput;

