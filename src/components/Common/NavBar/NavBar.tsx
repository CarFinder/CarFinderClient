import classNames from 'classnames';
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

class NavBar extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
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

  public handleCollapseMenu = () => {
    this.setState({
      open: !this.state.open
    });
  };

  public render() {
    const { language, isAuthenticated, handleLogOut, handleChangelanguage } = this.props;
    const lang = language === 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    const collapsed = classNames({
      'is-active': this.state.open
    });
    return (
      <nav className="navbar is-warning">
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item"
            onClick={() =>
              this.setState({
                open: false
              })
            }
          >
            CarFinder
          </Link>
          <div
            className="navbar-burger burger"
            data-target="nav-menu"
            onClick={this.handleCollapseMenu}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="nav-menu" className={'navbar-menu ' + `${collapsed}`}>
          <div className="navbar-start">
            <Link
              to="/home"
              className="navbar-item"
              onClick={() =>
                this.setState({
                  open: false
                })
              }
            >
              {lang.navigation.homepage}
            </Link>
            <Link
              to="/catalog"
              className="navbar-item"
              onClick={() =>
                this.setState({
                  open: false
                })
              }
            >
              {lang.navigation.catalog}
            </Link>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" onClick={() => handleChangelanguage('ru')}>
              {lang.navigation.ruLang}
            </a>
            <a className="navbar-item" onClick={() => handleChangelanguage('en')}>
              {lang.navigation.engLang}
            </a>
            {!isAuthenticated && (
              <div className={'navbar-menu ' + `${collapsed}`}>
                <Link
                  className="navbar-item"
                  to="/signin"
                  onClick={() =>
                    this.setState({
                      open: false
                    })
                  }
                >
                  {lang.navigation.signin}
                </Link>
                <Link
                  className="navbar-item"
                  to="/signup"
                  onClick={() =>
                    this.setState({
                      open: false
                    })
                  }
                >
                  {lang.navigation.signup}
                </Link>
              </div>
            )}
            {isAuthenticated && (
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  <i className="fa fa-user-o" aria-hidden="true" /> &nbsp; {lang.navigation.profile}
                </a>
                <div className="navbar-dropdown">
                  <Link
                    className="navbar-item"
                    to="/profile"
                    onClick={() =>
                      this.setState({
                        open: false
                      })
                    }
                  >
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
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
