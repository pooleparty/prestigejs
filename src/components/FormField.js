import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import difference from 'lodash/difference';
import includes from 'lodash/includes';
import omit from 'lodash/omit';
import union from 'lodash/union';

import Checkbox from './Checkbox';
import Form from './Form';
import FormGroup from './FormGroup';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import Textarea from './Textarea';

import './FormField.scss';

class FormField extends PureComponent {
  onChange = event => this.props.onChange(event.target.value, this.props.index);

  onCheckboxChange = (event) => {
    const selectedValues = this.props.value ? [].concat(this.props.value) : [];
    const { checked, value } = event.target;

    let newSelectedValues;

    if (checked) {
      newSelectedValues = union(selectedValues, [value]);
    } else {
      newSelectedValues = difference(selectedValues, [value]);
    }

    this.props.onChange(newSelectedValues, this.props.index);
  };

  renderText(props) {
    return <Input {...props} onChange={this.onChange} />;
  }

  renderTextarea(props) {
    return <Textarea {...props} onChange={this.onChange} />;
  }

  renderRadio(props) {
    const { className, options, ...rest } = props;

    return (
      <FormGroup className={className}>
        {options.map(option => (
          <Radio
            {...rest}
            onChange={this.onChange}
            value={option.value}
            checked={option.value === props.value}
            key={option.value}
          >
            {option.label}
          </Radio>
        ))}
      </FormGroup>
    );
  }

  renderCheckbox(props) {
    const { className, options, ...rest } = props;
    const selectedValues = [].concat(props.value);

    return (
      <FormGroup className={className}>
        {options.map(option => (
          <Checkbox
            {...rest}
            onChange={this.onCheckboxChange}
            value={option.value}
            checked={includes(selectedValues, option.value)}
            key={option.value}
          >
            {option.label}
          </Checkbox>
        ))}
      </FormGroup>
    );
  }

  renderSelect(props) {
    return <Select {...props} onChange={this.onChange} />;
  }

  renderInput() {
    const props = omit(this.props, ['feedbackText', 'index', 'label']);
    switch (props.type) {
      case 'text':
      case 'email':
      case 'phone':
      case 'file':
        return this.renderText(props);
      case 'textarea':
        return this.renderTextarea(props);
      case 'checkbox':
        return this.renderCheckbox(props);
      case 'radio':
        return this.renderRadio(props);
      case 'select':
        return this.renderSelect(props);
      default:
        return null;
    }
  }

  render() {
    const { feedbackText, id, label, valid } = this.props;

    return (
      <div className="form-field">
        <label className="form-field__label" htmlFor={id}>
          {label}
        </label>
        {this.renderInput()}
        {valid === false && feedbackText && <Form.Feedback>{feedbackText}</Form.Feedback>}
      </div>
    );
  }
}

FormField.propTypes = {
  className: PropTypes.string,
  feedbackText: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  placeholder: PropTypes.string,
  type: PropTypes.string,
  valid: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

FormField.defaultProps = {
  value: '',
};

FormField.displayName = 'FormField';

export default FormField;
