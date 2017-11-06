import classNames from 'classnames';
import * as React from 'react';

import './style.less';

export interface Props {
  loading: boolean;
  language: string;
}

export interface State {
  isActive: boolean;
}

class Calculator extends React.PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }
  public render() {
    const { language, loading } = this.props;
    return (
      <div>
        <div
          className={classNames('modal', {
            'is-active': this.state.isActive
          })}
        >
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Calculate Liquidity</p>
              <button
                className="delete"
                aria-label="close"
                onClick={() =>
                  this.setState({
                    isActive: !this.state.isActive
                  })}
              />
            </header>
            <section className="modal-card-body">Content ...</section>
            <footer className="modal-card-foot">
              <button className="button is-success">Calculate</button>
            </footer>
          </div>
        </div>
        <button
          className="button is-warning calculator"
          title="Liquidity calculator"
          onClick={() =>
            this.setState({
              isActive: !this.state.isActive
            })}
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default Calculator;
