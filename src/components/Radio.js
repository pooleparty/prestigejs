import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Radio(props) {
  const { disabled, children, className, tag: Tag, ...rest } = props;

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

Radio.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Radio.defaultProps = {
  tag: 'span',
};

Radio.displayName = 'Radio';

export default Radio;
