import React from 'react';
import { connect } from 'react-redux';
import { Form, Control, Errors } from 'react-redux-form';
import { Button } from 'react-bootstrap';

class AddRecordsWithReact extends React.Component {
  constructor(props) {
    super(props);
    this.onIdBlur = this.onIdBlur.bind(this);
  }
  onIdBlur(event) {
    let value = event.target.value;
    this.props.onBlur(value);
  }

  handleSubmit(val1, val2) {
    this.props.onSubmit(val1);
  }
  render() {
    return (
      <Form model="user" onSubmit={(user) => this.handleSubmit(user)}>
        <div style={{ height: 45 }}>
          <label style={{ width: 120 }}>User ID</label>
          <Control.text
            model="user.details.id"
            onBlur={this.onIdBlur}
            disabled={this.props.disabled}
            validators={{
              required: (val) => !!val.length,
            }}
          />
          <Errors
            model="user.details.id"
            messages={{
              required: 'User ID is required.',
            }}
          />
        </div>
        <br />
        <div style={{ height: 45 }}>
          <label style={{ width: 120 }}>First Name</label>
          <Control.text
            model="user.details.first"
            validators={{
              required: (val) => !!val.length
            }}
          />
          <Errors
            model="user.details.first"
            messages={{
              required: 'First Name is required.',
            }}
          />
        </div>
        <br />
        <div style={{ height: 45 }}>
          <label style={{ width: 120 }}>Last Name</label>
          <Control.text
            model="user.details.last"
            validators={{
              required: (val) => !!val.length
            }}
          />
          <Errors
            model="user.details.last"
            messages={{
              required: 'Last Name is required.',
            }}
          />
        </div>
        <br />
        <div style={{ height: 45 }}>
          <label style={{ width: 120 }}>Email</label>
          <Control.text
            model="user.details.email"
            type="email"
            validators={{
              required: (val) => !!val.length
            }}
          />
          <Errors
            model="user.details.email"
            messages={{
              required: 'Email is required.',
            }}
          />
        </div>
        <br />
        <div style={{ height: 60 }}>
          <label style={{ width: 120 }}>Phone number</label>
          <Control.text
            model="user.details.phone"
            validators={{
              required: (val) =>!!val.length && val.length==10 && parseInt(val)
            }}
          />
          <Errors
            model="user.details.phone"
            messages={{
              required: 'Phone number should be of 10 digits and is required'
            }}
          />
        </div>
        <br />
        <div style={{ height: 45 }}>
          <label style={{ width: 120 }}>Status</label>
          <Control.select model="user.details.status" id="user.details.status" validators={{
            required: (val) => !!val.length
          }}>
            <option value="">Select the Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </Control.select>
          <Errors
            model="user.details.status"
            messages={{
              required: 'status is required.',
            }}
          />
        </div>
        <br />
        <button type='submit'>Add</button>
      </Form>
    );
  }
}

export default AddRecordsWithReact;