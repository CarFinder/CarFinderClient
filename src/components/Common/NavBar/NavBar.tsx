import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../../redux/actions/userActions';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import './style.less';

interface Props {
  language: string;
  isAuthenticated: boolean;
  handleChangelanguage: (lang: string | null) => any;
  handleLogOut: () => any;
}

interface State {
  open: boolean;
}

function mapStateToProps(state: any) {
  return {
    language: state.user.interfaceLanguage,
    isAuthenticated: !!state.user.email
  };
}

const mapDispatchToProps = (dispatch: Dispatch<actions.UserAction>) => ({
  handleChangelanguage: (lang: string) => dispatch(actions.userChangeLanguage(lang)),
  handleLogOut: () => dispatch(actions.userLoggedOut())
});

class NavBar extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  public componentWillMount() {
    if (localStorage.getItem('interfaceLanguage')) {
      this.props.handleChangelanguage(localStorage.getItem('interfaceLanguage'));
    }
  }

  public handleRequestClose = (event: any, logout?: string) => {
    if (logout) {
      this.props.handleLogOut();
    }
    this.setState({ open: false });
  };

  public render() {
    const { language, isAuthenticated, handleLogOut, handleChangelanguage } = this.props;
    const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    return (
      <nav className="navbar is-warning">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            CarFinder
          </Link>
        </div>
        <div className="navbar-start">
          <div className="navbar-menu is-active">
            <Link to="/" className="navbar-item">
              {lang.navigation.homepage}
            </Link>
            <Link to="/catalog" className="navbar-item">
              {lang.navigation.catalog}
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <a className="navbar-item" onClick={() => handleChangelanguage('ru')}>
            {lang.navigation.ruLang}
          </a>
          <a className="navbar-item" onClick={() => handleChangelanguage('en')}>
            {lang.navigation.engLang}
          </a>
          {!isAuthenticated && (
            <div className="navbar-menu is-active">
              <Link className="navbar-item" to="/signin">
                {lang.navigation.signin}
              </Link>
              <Link className="navbar-item" to="/signup">
                {lang.navigation.signup}
              </Link>
            </div>
          )}
          {isAuthenticated && (
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                <i className="fa fa-user-o" aria-hidden="true" /> &nbsp; User Account
              </a>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/profile">
                  {lang.navigation.profile}
                </Link>
                <a
                  className="navbar-item"
                  onClick={(e: any) => this.handleRequestClose(e, 'logout')}
                >
                  {lang.navigation.signout}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
