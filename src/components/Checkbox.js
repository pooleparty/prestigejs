import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Checkbox.scss';

function Checkbox(props) {
  const { disabled, children, className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'form-check', { 'form-check--disabled': disabled });

  return (
    <Tag className={classes}>
      <label className="form-check__label">
        <input {...rest} className="form-check__input" type="checkbox" disabled={disabled} />
        <span className="form-check__decorator" />
        {children}
      </label>
    </Tag>
  );
}

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Checkbox.defaultProps = {
  tag: 'span',
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
