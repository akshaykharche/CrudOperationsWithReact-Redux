import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class TableRecordsContainerWithRedux extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
       this.props.onClick(event.target.id)
    }
    render() {
        return (
            <div>
                 <h5>List of Contacts</h5>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>##</th>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {this.props && this.props.records.map(person => {
                            return <tr key={person.id}>
                                <td> <input type="radio" id={person.id} name="radio" onClick={this.handleClick} />  </td>                            
                                <td>{person.id} </td>
                                <td> {person.first} </td>
                                <td> {person.last}</td>
                                <td> {person.email}</td>
                                <td> {person.phone}</td>
                                <td> {person.status}</td>
                         </tr>
                        })}
                    </tbody>
                </Table>

            </div>
        );
    }
}
export default TableRecordsContainerWithRedux;