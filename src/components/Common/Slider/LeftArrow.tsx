import React, { Component } from 'react';

interface PropTypes {
  previousSlide?: () => void;
}

const LeftArrow = (props: PropTypes) => {
  return (
    <div className="backArrow" onClick={props.previousSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
    </div>
  );
};

export default LeftArrow;
