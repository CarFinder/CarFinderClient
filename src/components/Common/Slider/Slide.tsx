import React, { Component } from 'react';

interface PropTypes {
  background: any;
  current: any;
}

const Slide = (props: PropTypes) => {
  const current = props.background[props.current];

  const styles = {
    imageBackground: {
      backgroundImage: `url(${current})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  };
  return <div className="slide" style={styles.imageBackground} />;
};

export default Slide;
