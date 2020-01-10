import React, { Component } from 'react';
import ActNav from "../../components/ActNav";
import ActPatient from '../../components/ActPatient/ActPatient';

class AccountPage extends Component {
  render (){ 
  return (
    <div className = "AccountPage">
    <ActNav />
    <ActPatient />
    </div>
  )
}
}

export default AccountPage;