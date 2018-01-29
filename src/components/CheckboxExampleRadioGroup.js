import React, { Component } from 'react';
import { Form, Checkbox, Header } from 'semantic-ui-react';

const textStyle = {
    color: "white"
  };

export default class CheckboxExampleRadioGroup extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Form.Field>
          Choose How Many Points: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
        <Header as='h3' color='red'><Checkbox
            radio
            label='100 Points $25.00'
            color='red'
            name='checkboxRadioGroup'
            value='100 Points $25.00'
            checked={this.state.value === '100 Points $25.00'}
            onChange={this.handleChange}
          /></Header>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='200 Points $45.00'
            name='checkboxRadioGroup'
            value='200 Points $45.00'
            checked={this.state.value === '200 Points $45.00'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='500 Points $100.00'
            name='checkboxRadioGroup'
            value='500 Points $100.00'
            checked={this.state.value === '500 Points $100.00'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )
  }
}