import React, {Component} from 'react';
import "./style.css";
// import API from "../../utils/API";
import { Table, Container } from 'reactstrap';
import API from '../../utils/API';


class  DocPatient extends Component {

    state = {
      qty: [],
      fee: "",
      total: ""
    };

    componentDidMount() {
      this.loadProcedures();
    };

    loadProcedures = () => {
      API.getProcedures()
      .then(res =>
        this.setState({ qty: [], fee: "", total: ""})
        )
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
      const { name , value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.qty && this.state.total) {
        API.saveProcedure({
          qty: this.state.qty,
          service: this.state.total
        })
        .then(res => this.loadProcedures())
        .catch(err => console.log(err));
      }
    };

render() {
  return (
   
    <Container className="service-box">
    <Table >
      <thead className="table-header">
        <tr>
          <th>EVALUATIONS</th>
          <th>Code</th>
          <th>MOD</th>
          <th>QTY</th>
          <th>Time Length</th>
          <th>Fee</th>
          <th>Total</th>
          <th>DX</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">PT Evaluation</th>
          <td value="97001">97001</td>
          <td>GP</td>
          <td><input placeholder="0"></input></td>
          <td></td>
          <td>$150</td>
          <td></td>
          <td></td>
          </tr>
        <tr>
          <th scope="row">PT Re Evaluation</th>
          <td>97002</td>
          <td>GP-59</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$75</td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
        <thead className="table-header">
        <tr>
          <th>MODALITY (set-up)</th>
          <th>Code</th>
          <th>MOD</th>
          <th>QTY</th>
          <th>Time Length</th>
          <th>Fee</th>
          <th>Total</th>
          <th>DX</th>
        </tr>
      </thead>
      <tbody>
      <tr>
      <th scope="row">Hot/Cold Pack (WC)</th>
          <td>97010</td>
          <td>GP-59</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$12</td>
          <td></td>
          <td></td>
      </tr>    
      <tr>
      <th scope="row">Mechanical</th>
          <td>97912</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$45</td>
          <td></td>
          <td></td>
      </tr>    
      <tr>
      <th scope="row">Electrical Stimulation (MCR)</th>
          <td>G0283</td>
          <td>GP-59</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$30</td>
          <td></td>
          <td></td>
      </tr>    
      <tr>
      <th scope="row">Elictrical Stimulation Unattended</th>
          <td>97035</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$30</td>
          <td></td>
          <td></td>
      </tr>    
      </tbody>
      <thead className="table-header">
        <tr>
          <th>MODALITY (attended)</th>
          <th>Code</th>
          <th>MOD</th>
          <th>QTY</th>
          <th>Time Length</th>
          <th>Fee</th>
          <th>Total</th>
          <th>DX</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">Electrical Stimulation (15 min)</th>
          <td>97032</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$45</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Iontophoresis (15 min)</th>
          <td>97033</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$45</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Ultrasound (15 min)</th>
          <td>97035</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$35</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <thead className="table-header">
        <tr>
          <th>PROCEDURES (15 MIN EACH)</th>
          <th>Code</th>
          <th>MOD</th>
          <th>QTY</th>
          <th>Time Length</th>
          <th>Fee</th>
          <th>Total</th>
          <th>DX</th>
        </tr>
        </thead>
        <tr>
          <th scope="row">Gait Training</th>
          <td>77112</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$40</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Hydrotherapy</th>
          <td>97039</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$30</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Manual Muscle Testing, Body</th>
          <td>95833</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$75</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Manual Therapy</th>
          <td>97140</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$50</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Neuromusc Re-ed</th>
          <td>97112</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td val="45">$45</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Orthotic Check Out</th>
          <td>97762</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$40</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Orthotic Fitting</th>
          <td>97760</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$45</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Orthotics/Splint</th>
          <td>L3030</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Range of Motion Test, TMK/ Limb</th>
          <td>95851</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$50</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Self Care Management Training</th>
          <td>97535</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$35</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">TENS Educ/ Set Up/ Instruction</th>
          <td>64550</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$90</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Therapeutic Activity</th>
          <td>97530</td>
          <td>GP-59</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$45</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Therapeutic Exercise</th>
          <td>97110</td>
          <td>GP</td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$45</td>
          <td></td>
          <td></td>
        </tr>
        <thead className="table-header">
        <tr>
          <th>SUPPLIES</th>
          <th>Code</th>
          <th>MOD</th>
          <th>QTY</th>
          <th>Time Length</th>
          <th>Fee</th>
          <th>Total</th>
          <th>DX</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">Ball: 45cm</th>
          <td>CS002</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$24</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Ball: 55cm</th>
          <td>CS003</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$30</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Ball: 65cm</th>
          <td>CS004</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$30</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Ball: 75cm</th>
          <td>CS005</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$30</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Ball: 85cm</th>
          <td>CS006</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$38</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Biofreeze</th>
          <td>CS011</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$15</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Brown Tape</th>
          <td>CS020</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$15</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Cervical Pillow- Travel</th>
          <td>CS010</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$24</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Cold Pack- Cervical</th>
          <td>CS017</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$20</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Cold Pack Standard/Lumbar</th>
          <td>CS018</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$20</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Electrical Iontophoresis Small</th>
          <td>CS025</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$13</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Electrical Iontophoresis Medium</th>
          <td>CS026</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$15</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Electrodes (2" round)</th>
          <td>CS013</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$12</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Foam Rolls Small</th>
          <td>CS027</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$20</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Foam Rolls Large</th>
          <td>CS028</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$30</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Hand Putty</th>
          <td>CS015</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$8</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Heel LiRs???</th>
          <td>CS029</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$8</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Iontophoresis Electrodes</th>
          <td>CS014</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$12</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Lumbar Cushion</th>
          <td>CS001</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$35</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">OH Pulleys</th>
          <td>CS030</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$15</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Theraband</th>
          <td>CS016</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$12</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Theracane</th>
          <td>CS012</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$45</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Theratubing</th>
          <td>CS033</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$8</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">White Tape</th>
          <td>CS034</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>$15</td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
        <thead className="table-header">
        <tr>
          <th>MISCELLANEOUS</th>
          <th>Code</th>
          <th>MOD</th>
          <th>QTY</th>
          <th>Time Length</th>
          <th>Fee</th>
          <th>Total</th>
          <th>DX</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">No Show</th>
          <td>99087</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>N/C</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Cancelled Appt.</th>
          <td>99083</td>
          <td></td>
          <td><input val="quantity" placeholder="0"></input></td>
          <td></td>
          <td>N/C</td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
    </Table>
    </Container>
    )
}
  }



export default DocPatient;