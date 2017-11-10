import * as React from 'react';
import Contact from './HomePageBlocks/Contact';
import Features from './HomePageBlocks/Features';
import Header from './HomePageBlocks/Header';
import Technologies from './HomePageBlocks/Technologies';

class HomePage extends React.PureComponent<any, any> {
  public render() {
    return (
      <div>
        <Header />
        <Features />
        <Technologies />
        <Contact />
      </div>
    );
  }
}

export default HomePage;
