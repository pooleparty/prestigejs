import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Section.scss';

class Section extends Component {
  static displayName = 'Section';

  static propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'section',
  };

  render() {
    const { size, className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'section', { [`section--${size}`]: !!size });

    return <Tag {...rest} className={classes} />;
  }
}

export default Section;
