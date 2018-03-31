import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Section.scss';

function Section(props) {
  const { size, className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'section', { [`section--${size}`]: !!size });

  return <Tag {...rest} className={classes} />;
}

Section.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Section.defaultProps = {
  tag: 'section',
};

Section.displayName = 'Section';

export default Section;
