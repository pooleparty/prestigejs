import { kebabCase } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PaletteHeader.scss';

function PaletteHeader({ name, baseColor, inverted }) {
  const classes = [
    'palette__header',
    {
      'palette__header--inverted': inverted,
    },
  ];
  const style = { backgroundColor: baseColor };

  return (
    <div className={classNames(classes)} style={style}>
      <div className="palette__name">
        <span>{name}</span>
        <span>{`$${kebabCase(name)}`}</span>
      </div>
      <div className="palette__base">
        <span>{baseColor}</span>
      </div>
    </div>
  );
}

PaletteHeader.propTypes = {
  name: PropTypes.string,
  baseColor: PropTypes.string,
  inverted: PropTypes.bool,
};

export default PaletteHeader;
