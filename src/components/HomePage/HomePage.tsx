import * as React from 'react';
import api from '../../api/api';
import * as interfaces from '../../interfaces';
import Contact from './HomePageBlocks/Contact';
import Features from './HomePageBlocks/Features';
import Header from './HomePageBlocks/Header';
import Technologies from './HomePageBlocks/Technologies';

export interface Props {
  handleSetLoading: (loading: boolean) => void;
  handleSetSuccessMessage: (message: string) => void;
  handleSetError: (error: string) => void;
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
    this.props.handleSetLoading(true);
    this.props.handleClearError();
    api.user
      .submitMessage(message)
      .then(response => {
        this.props.handleSetLoading(false);
        this.props.handleSetSuccessMessage('Сообщение было отправлено успешно');
      })
      .catch(e => {
        this.props.handleSetLoading(false);
        const error = e.response.data.error ? e.response.data.error : 'Server-side error';
        this.props.handleSetError(error);
      });
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
