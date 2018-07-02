import React, { Component } from 'react';
import columns from '../../Json/columns.json';
import records from '../../Json/records.json';
import { connect } from 'react-redux';
import { Table, Button, bsStyle, Row, Col, Grid } from 'react-bootstrap';
import TableRecordsContainerWithRedux from './TableRecordsContainerWithRedux';
import * as loadRecords from '../../actions/LoadUserAction';
class ShowRecordsWithReactRedux extends React.Component {
    componentDidMount() {
        this.props.actions();
    }
    render() {
        let records = this.props && this.props.records;
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                    {records ?
                        <TableRecordsContainerWithRedux records={records} onClick={this.handleClick} />
                        :"LOADING"}
                    </Col>
                </Row>
            </Grid>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        records: state.users && state.users.users
    }
}

export default connect(mapStateToProps, {
    actions: loadRecords.LoadUserAction
})(ShowRecordsWithReactRedux);
