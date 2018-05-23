import * as React from 'react';
import { Component } from 'react';
// import PropTypes from 'prop-types';
import Select from 'react-select';

export interface MultiSelectState {
  removeSelected: boolean;
  items: any[];
}

class MultiSelectSample extends Component<any, MultiSelectState> {

  constructor(props: any) {
    super(props);
    this.state = {
      removeSelected: true,
      items: []
    };
  }

  handleSelectChange = (value: any) => {
    debugger;
    console.log('You\'ve selected:', value);
    this.setState(
      {
        items: value
      });
  }

  render() {
    let value1 = this.state.items;
    let options = FLAVOURS;
    return (
      <div className="section">
        <Select
          closeOnSelect={true}
          disabled={false}
          multi
          onChange={this.handleSelectChange}
          options={options}
          placeholder="Select your favourite(s)"
          removeSelected={this.state.removeSelected}
          rtl={false}
          simpleValue={false}
          value={value1}
        />
      </div>
    );
  }
}

export default MultiSelectSample;

const FLAVOURS = [
  { label: 'Chocolate', value: '1' },
  { label: 'Vanilla', value: '2' },
  { label: 'Strawberry', value: '3' },
  { label: 'Caramel', value: '4' },
  { label: 'Cookies and Cream', value: '5' },
  { label: 'Peppermint', value: '6' },
];