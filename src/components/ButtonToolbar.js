import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ButtonToolbar.scss';

function ButtonToolbar(props) {
  const { className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'button-toolbar');

  return <Tag {...rest} className={classes} />;
}

ButtonToolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ButtonToolbar.defaultProps = {
  tag: 'div',
};

ButtonToolbar.displayName = 'ButtonToolbar';

export default ButtonToolbar;
