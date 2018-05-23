import { Component } from 'react';
import * as React from 'react';
import Input from '@material-ui/core/Input';
// import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

class Option extends Component {

  // tslint:disable-next-line:no-any
  handleClick = (event: any) => {
    debugger;
    const dp = this.props;
    let onSelect = dp['onSelect'];
    let option = dp['option'];
    onSelect(option, event);
  }

  render() {
    const dp = this.props;
    const isFocused = dp['isFocused'];
    const isSelected = dp['isSelected'];
    const children = dp['children'];
    let onFocus = dp['onFocus'];
    // const { children
    //   // ,isFocused, isSelected, onFocus 
    // } = this.props;

    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
      >
        {children}
      </MenuItem>
    );
  }
}

// tslint:disable-next-line:no-any
function SelectWrapped(props: any) {
  const { classes, ...other } = props;
  debugger;
  return (

    <Select
      optionComponent={Option}
      noResultsText={'No results found'}
      arrowRenderer={arrowProps => {
        return arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
      }}
      clearRenderer={() => <ClearIcon />}
      valueComponent={valueProps => {
        const {
          // value, 
          children,
          //  onRemove 
        } = valueProps;

        // tslint:disable-next-line:no-any
        const onDelete = (event: any) => {
          event.preventDefault();
          event.stopPropagation();
          // onRemove(value);
        };

        // if (onRemove) {
        return (
          <Chip
            tabIndex={-1}
            label={children}
            className={classes.chip}
            deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
            onDelete={onDelete}
          />
        );
        // }

        //  return <div className="Select-value">{children}</div>;
      }}
      {...other}
    />
  );
}

class IntegrationReactSelect extends Component {
  state = {
    multi: 'multi'
  };

  // tslint:disable-next-line:no-any
  handleChange = (name: any) => (value: any) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <Input
          fullWidth={true}
          inputComponent={SelectWrapped}
          value={this.state.multi}
          onChange={this.handleChange('multi')}
          placeholder="Select multiple countries"
          name="react-select-chip"
          inputProps={{
            multi: true,
            instanceId: 'react-select-chip',
            id: 'react-select-chip',
            simpleValue: true,
            options: suggestions,
          }}
        />
      </div>
    );
  }
}

export default IntegrationReactSelect;
