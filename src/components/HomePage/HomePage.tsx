import * as React from 'react';
import * as interfaces from '../../interfaces';
import Contact from './HomePageBlocks/Contact';
import Features from './HomePageBlocks/Features';
import Header from './HomePageBlocks/Header';
import Technologies from './HomePageBlocks/Technologies';

export interface Props {
  handleSubmitMessage: (message: any) => void;
  handleClearError: () => void;
  handleGetStats: () => void;
  loading: boolean;
  searchError?: any;
  authError?: any;
  language: string;
  successMessage: string;
  stats: interfaces.ServiceStats;
}

class HomePage extends React.PureComponent<Props, any> {
  public handleSubmit = (message: interfaces.SendMessage) => {
    this.props.handleSubmitMessage(message);
  };

  public componentDidMount() {
    this.props.handleClearError();
    this.props.handleGetStats();
  }

  public render() {
    const { language, searchError, authError, loading, successMessage, stats } = this.props;
    return (
      <div>
        <Header language={language} searchError={searchError} stats={stats} />
        <Features language={language} />
        <Technologies language={language} />
        <Contact
          onSubmit={this.handleSubmit}
          language={language}
          loading={loading}
          successMessage={successMessage}
          authError={authError}
        />
      </div>
    );
  }
}

export default HomePage;
