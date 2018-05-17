import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createSVGElement from '../utils/createSVGElement';
import getSVGFromManifest from '../utils/getSVGFromManifest';

import './Icon.scss';

export const ICON_SIZES = {
  xxs: 12,
  xs: 16,
  sm: 25,
  md: 32,
  lg: 48,
  xl: 64,
};

class Icon extends PureComponent {
  static displayName = 'Icon';

  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(Object.keys(ICON_SIZES)),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    className: '',
    size: 'md',
    width: undefined,
    height: undefined,
  };

  render() {
    const {
      name,
      className,
      size,
      width = ICON_SIZES[size],
      height = ICON_SIZES[size],
      ...rest
    } = this.props;

    const svg = getSVGFromManifest(name);

    const iconClassName = classNames(
      'icon',
      {
        [`icon--${size}`]: !!size,
        [`icon-${name}`]: !!name,
      },
      className,
    );

    svg.attrs = {
      className: iconClassName,
      ...svg.attrs,
      width,
      height,
      ...rest,
    };

    return createSVGElement(svg);
  }
}

export default Icon;
