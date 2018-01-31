import React, { Component } from 'react';
import { Form, Checkbox, Header, Card } from 'semantic-ui-react';
import "./App.css";

const textStyle = {
    color: "white"
  };

export default class CheckboxExampleRadioGroup extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Card centered fluid>
      <Form>
        <Form.Field><h3>
          Choose How Many Points: <b>{this.state.value}</b>
          </h3>
        </Form.Field>
        <Form.Field>
        <h1 className="txt-color"><Checkbox
            radio
            label='100 Points $25.00'
            color='red'
            name='checkboxRadioGroup'
            value='100 Points $25.00'
            checked={this.state.value === '100 Points $25.00'}
            onChange={this.handleChange}
          /></h1>
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
      </Card>
    )
  }
}