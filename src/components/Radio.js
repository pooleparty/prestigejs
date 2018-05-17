import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Radio extends Component {
  static displayName = 'Radio';

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'span',
  };

  render() {
    const { disabled, children, className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'form-check', { 'form-check--disabled': disabled });

    return (
      <Tag className={classes}>
        <label className="form-check__label">
          <input {...rest} className="form-check__input" type="radio" disabled={disabled} />
          <span className="form-check__decorator" />
          {children}
        </label>
      </Tag>
    );
  }
}

export default Radio;
