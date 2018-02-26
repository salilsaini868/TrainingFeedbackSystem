import * as React from 'react';
import { DropdownItem } from '../api/model';

export interface DropdownProp {
  items: DropdownItem[];
  selectedId: number;
  onDropdownChange: any;
}

class SelectDropdown extends React.Component<DropdownProp> {

  constructor(props: DropdownProp) {
    super(props);   
  }

  handleChange = (event: any) => {   
    let selectedValue = event.target.value;
    if (selectedValue) {
      var item = this.props.items.find(t => t.id === +selectedValue);
      this.props.onDropdownChange(item);
    }
  }

  render() {
    let selId = this.props.selectedId;
    var items = this.props.items.map(function (item: DropdownItem, i: number) {
      return (
        <option value={item.id} key={i}>{item.name}</option>
      );
    });
    return (
      <select onChange={this.handleChange} value={selId}>
        {items}
      </select>
    );
  }
}

export default SelectDropdown;