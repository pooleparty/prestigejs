/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';
import './PaletteColor.scss';

const animationDuration = 800;

class PaletteColor extends PureComponent {
  constructor(props) {
    super(props);

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hover = this.hover.bind(this);
    this.dehover = this.dehover.bind(this);
    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);

    this.state = {
      hover: false,
      active: false,
    };
  }

  handleMouseEnter() {
    this.hover();
  }

  handleMouseLeave() {
    this.dehover();
  }

  handleClick() {
    this.activate();
  }

  hover() {
    this.setState({ hover: true });
  }

  dehover() {
    this.setState({ hover: false });
  }

  activate() {
    this.setState({ active: true }, this.deactivate);
    this.dehover();
  }

  deactivate() {
    if (!this.timeout) {
      this.timeout = setTimeout(() => {
        this.setState({ active: false }, () => delete this.timeout);
      }, animationDuration);
    }
  }

  render() {
    const { color, index, inverted } = this.props;
    const { hover, active } = this.state;
    const classes = [
      'palette__color',
      {
        'palette__color--inverted': inverted,
        'palette__color--hover': hover,
        'palette__color--active': active,
      },
    ];
    const style = { backgroundColor: color };

    return (
      <CopyToClipboard text={color}>
        <div
          className={classNames(classes)}
          style={style}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <span>{index * 100}</span>
          <span>{color}</span>
        </div>
      </CopyToClipboard>
    );
  }
}

PaletteColor.propTypes = {
  color: PropTypes.string,
  index: PropTypes.number,
  inverted: PropTypes.bool,
};

export default PaletteColor;
