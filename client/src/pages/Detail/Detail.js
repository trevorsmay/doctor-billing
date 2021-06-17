import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PatientTable from "../../components/PatientTable";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Procedure from "../../components/Procedure/Procedure";
// import { Col, Row, Container, Jumbotron } from "reactstrap";


class Detail extends Component {
  state = {
    patient: {}
  };
  // When this component mounts, grab the patient with the _id of this.props.match.params.id
  // e.g. localhost:3000/profile/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPatient(this.props.match.params.id)
      .then(res => this.setState({ patient: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Patient Number: {this.state.patient.patientNumber}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
        <Procedure />
          <Col size="md-4">
            <Link to="/profile">← Return to Profile</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
