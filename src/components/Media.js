import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Media(props) {
  const {
    children,
    media,
    reverse,
    center,
    spacing,
    imageSize,
    className,
    tag: Tag,
    ...rest
  } = props;

  const topClassNames = classNames(className, 'media', {
    'media--reverse': reverse,
    'media--center': center,
    'media--close': spacing === 'close',
    'media--far': spacing === 'far',
  });

  const bodyClassNames = classNames('media__body', {
    'media__body--wide': imageSize === 'narrow',
    'media__body--narrow': imageSize === 'wide',
  });

  const mediaClassNames = classNames('media__media', {
    'media__media--narrow': imageSize === 'narrow',
    'media__media--wide': imageSize === 'wide',
  });

  return (
    <Tag {...rest} className={topClassNames}>
      <div className={bodyClassNames}>{children}</div>
      <div className={mediaClassNames}>{media}</div>
    </Tag>
  );
}

Media.propTypes = {
  children: PropTypes.node.isRequired,
  media: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  center: PropTypes.bool,
  spacing: PropTypes.oneOf(['close', 'default', 'far']),
  imageSize: PropTypes.oneOf(['narrow', 'default', 'wide']),
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Media.defaultProps = {
  reverse: false,
  center: false,
  spacing: 'default',
  imageSize: 'default',
  tag: 'div',
};

Media.displayName = 'Media';

export default Media;
