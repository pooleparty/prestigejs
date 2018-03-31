import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import PaletteHeader from './PaletteHeader';
import PaletteColor from './PaletteColor';

import './Palette.scss';

const WHITE = '#ffffff';
const BLACK = '#000000';

function mix(color1, color2, amount) {
  return tinycolor.mix(color1, color2, amount).toHexString();
}

function generatePaletteColors(color) {
  if (color === WHITE || color === BLACK) {
    return [];
  }

  return [
    mix(color, WHITE, 80),
    mix(color, WHITE, 60),
    mix(color, WHITE, 40),
    mix(color, WHITE, 20),
    mix(color, color),
    mix(color, BLACK, 20),
    mix(color, BLACK, 40),
    mix(color, BLACK, 60),
    mix(color, BLACK, 80),
  ];
}

function Palette({ name, baseColor, inverted }) {
  const paletteColors = generatePaletteColors(baseColor);

  return (
    <div className="palette">
      <PaletteHeader name={name} baseColor={baseColor} inverted={inverted} />
      {paletteColors.map((color, i) => (
        <PaletteColor color={color} index={i + 1} inverted={i > 3} key={color} />
      ))}
    </div>
  );
}

Palette.propTypes = {
  name: PropTypes.string,
  baseColor: PropTypes.string,
  inverted: PropTypes.bool,
};

Palette.defaultProps = {
  inverted: true,
};

export default Palette;
