import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Select.scss';

class Select extends Component {
  static displayName = 'Select';

  static propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      }),
    ),
    placeholder: PropTypes.string,
    valid: PropTypes.bool,
    value: PropTypes.string,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    onChange: () => {},
    options: [],
    placeholder: 'Select...',
    tag: 'span',
  };

  render() {
    const { options, placeholder, valid, className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'select', {
      'select--valid': valid === true,
      'select--invalid': valid === false,
      'select--placeholder-shown': !rest.value,
    });

    return (
      <Tag className={classes}>
        <select {...rest} className="select__input">
          <option hidden>{placeholder}</option>
          {options.map(({ label, value }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
        <div className="select__decorator" />
      </Tag>
    );
  }
}

export default Select;
