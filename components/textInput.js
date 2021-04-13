import React from 'react';
import {TextInput} from 'react-native-paper';
import PropTypes from 'prop-types';
import {Controller} from 'react-hook-form';

const CustomTextInput = props => {
  return (
    <Controller
      control={props.control}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
        disabled={props.disabled}
          dense={true}
          label={props.label}
          style={props.style}
          onBlur={onBlur}
          onChangeText={value => {
            onChange(value);
          }}
          value={value}
          mode="outlined"
          keyboardType={props.type}
        />
      )}
      name={props.name}
      rules={{required: props.required}}
      defaultValue={props.defaultValue}
    />
  );
};

export default CustomTextInput;

CustomTextInput.propTypes = {
  label: PropTypes.string,
  control: PropTypes.object,
  style: PropTypes.object,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
};
