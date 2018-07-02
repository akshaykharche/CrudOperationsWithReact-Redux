import React, { Component } from 'react';
import columns from '../../Json/columns.json';
import records from '../../Json/records.json';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { Table, Button, bsStyle, Row, Col, Grid } from 'react-bootstrap';
import TableRecordsContainer from './TableRecordsContainer';
import AddRecordsWithReact from './AddRecordsWithReact';
export class ShowRecordsWithReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            disabled: false,
            records
        }
        this.handleClick = this.handleClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onIdBlur = this.onIdBlur.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
    }
    onIdBlur(value) {
        let { records } = this.state;
        let idExists = records.find((v) => v.id == value);
        if (idExists) {
            alert("User ID already exists");
            this.props.change('user.details.id', '')
        }
    }
    
    onEditClick() {
        let { selected, records } = this.state;
        if (selected) {
            let data = records.filter((value) => value.id == selected);
            this.props.change('user.details', data[0]);
            this.setState({ disabled: true })
        }

    }

    handleClick(value) {
        this.setState({ selected: value })
    }
    onSaveClick(data) {
        let { records, disabled ,selected} = this.state;
        if (disabled) {
            let dataFilter = records.filter((value) => value.id != selected);
            dataFilter.push(data.details);
            this.setState({ disabled: false ,records:dataFilter});
        }
        else {
            records.push(data.details);
            this.setState({ records });
        }
        this.props.reset('user.details');
    }

    onDeleteClick() {
        let { selected, records } = this.state;
        let updatedRecords = records.filter((value) => value.id !== selected);
        this.setState({ records: updatedRecords });
    }

    render() {
        return (
            <div style={{marginLeft:100}}>
            <Grid style={{margin:10 ,border: '1px solid' , padding: 10}}>
                <Row>
                    <Col md={4}>
                    <h5>Create Contact</h5>
                        <AddRecordsWithReact onSubmit={this.onSaveClick} onBlur={this.onIdBlur} disabled={this.state.disabled} />
                    </Col>
                    <Col md={8}>
                        <TableRecordsContainer records={this.state.records} onClick={this.handleClick} />
                        <Button bsStyle="danger" onClick={this.onDeleteClick} style={{marginRight:10}}>Delete</Button>
                        <Button bsStyle="primary" onClick={this.onEditClick} >Edit</Button>
                    </Col>
                </Row>
            </Grid>
                </div>
        )
    }
}

export default connect(null, {
    change: actions.change,
    reset: actions.reset,
    load: actions.load
})(ShowRecordsWithReact);