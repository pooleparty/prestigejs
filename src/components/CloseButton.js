import React from 'react';
import PropTypes from 'prop-types';
import './CloseButton.scss';

const CloseButton = ({ label, onClick }) => (
  <button type="button" className="close" onClick={onClick}>
    <span aria-hidden="true">&times;</span>
    <span className="sr-only">{label}</span>
  </button>
);

CloseButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CloseButton.defaultProps = {
  label: 'Close',
};

export default CloseButton;
