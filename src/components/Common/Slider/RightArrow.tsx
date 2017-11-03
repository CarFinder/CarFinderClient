import React, { Component } from 'react';

interface PropTypes {
  nextSlide?: () => void;
}

const RightArrow = (props: PropTypes) => {
  return (
    <div className="nextArrow" onClick={props.nextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </div>
  );
};

export default RightArrow;
