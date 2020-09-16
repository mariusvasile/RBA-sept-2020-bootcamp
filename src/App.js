import React, { Component } from "react";
import "./App.css";

class Table extends Component {
  constructor(props) {
    super(props); // since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      attendees: [
        {
          id: 1,
          name: "Jack Hammond",
          role: "TBC",
          email: "jack.Hammond@reedbusiness.com",
        },
        {
          id: 2,
          name: "James Sedman",
          role: "TBC",
          email: "james.sedman@reedbusiness.com",
        },
        {
          id: 3,
          name: "Sophie Archibald",
          role: "TBC",
          email: "sophie.archibald@proagrica.com",
        },
        {
          id: 4,
          name: "Thomas Hardy",
          role: "TBC",
          email: "thomas.hardy@proagrica.com",
        },
        {
          id: 5,
          name: "Alexander Milner",
          role: "TBC",
          email: "alexander.milner@cirium.com",
        },
        {
          id: 6,
          name: "Kautar Uahabi",
          role: "TBC",
          email: "kautar.uahabi@proagrica.com",
        },
        {
          id: 7,
          name: "Aaron Adekoya",
          role: "TBC",
          email: "aaron.adekoya@reedbusiness.com",
        },
        {
          id: 8,
          name: "Harnek Bagri",
          role: "TBC",
          email: "harnek.bagri@proagrica.com",
        },
        {
          id: 9,
          name: "Mishael Oguntimehin",
          role: "TBC",
          email: "mishael.oguntimehin@reedbusiness.com",
        },
        {
          id: 10,
          name: "Nadim Shah",
          role: "TBC",
          email: "nadim.shah@cirium.com",
        },
        {
          id: 11,
          name: "Nameera Simran",
          role: "TBC",
          email: "nameera.simran@reedbusiness.com",
        },
        {
          id: 12,
          name: "Stephen Truong",
          role: "TBC",
          email: "stephen.truong@reedbusiness.com",
        },
      ],
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.attendees[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.attendees.map((attendee, index) => {
      const { id, name, role, email } = attendee; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{role}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">RBA Technology Associates</h1>
        <table id="attendees">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
