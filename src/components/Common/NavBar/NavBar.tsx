import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import MenuIcon from 'material-ui-icons/Menu';
import Person from 'material-ui-icons/Person';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
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
  anchorEl: any;
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
      anchorEl: null,
      open: false
    };
  }
  public componentWillMount() {
    if (localStorage.getItem('interfaceLanguage')) {
      this.props.handleChangelanguage(localStorage.getItem('interfaceLanguage'));
    }
  }

  public handleClick = (event: any) => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

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
      <div className="navbar">
        <AppBar position="fixed">
          <Toolbar>
            <Button color="inherit">CarFinder</Button>
            <div className="items-left">
              <Link to="/">
                <Button color="contrast">{lang.navigation.homepage}</Button>
              </Link>
              <Link to="/catalog">
                <Button color="contrast">{lang.navigation.catalog}</Button>
              </Link>
            </div>
            <div className="items-right">
              <Button
                color="contrast"
                className={language === 'ru' ? 'selected' : ''}
                onClick={() => handleChangelanguage('ru')}
              >
                {lang.navigation.ruLang}
              </Button>
              <Button
                color="contrast"
                className={language !== 'ru' ? 'selected' : ''}
                onClick={() => handleChangelanguage('en')}
              >
                {lang.navigation.engLang}
              </Button>
              {!isAuthenticated && (
                <div className="menu-links-container">
                  <Link to="/signin">
                    <Button color="contrast">{lang.navigation.signin}</Button>
                  </Link>
                  <Link to="/signup">
                    <Button color="contrast">{lang.navigation.signup}</Button>
                  </Link>
                </div>
              )}
              {isAuthenticated && (
                <div className="menu-links-container">
                  <Button
                    color="contrast"
                    className="profile-button"
                    aria-owns={this.state.open ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                  >
                    <Person />
                    <ArrowDropDown />
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                  >
                    <MenuItem onClick={this.handleRequestClose}>
                      <Link to="/profile">{lang.navigation.profile}</Link>
                    </MenuItem>
                    <MenuItem onClick={(e: any) => this.handleRequestClose(e, 'logout')}>
                      {lang.navigation.signout}
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
