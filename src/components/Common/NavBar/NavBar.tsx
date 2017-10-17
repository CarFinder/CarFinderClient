import MenuIcon from 'material-ui-icons/Menu';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import * as actions from '../../../redux/actions/userActions';
import { Link } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import interfaceLanguage from '../../../utils/interfaceLanguage';
import './style.less';

interface Props {
  language: string;
  handleChangelanguage: (lang: string | null) => any;
}

function mapStateToProps(state: any) {
  return {
    language: state.user.interfaceLanguage
  };
}

const mapDispatchToProps = (dispatch: Dispatch<actions.UserAction>) => ({
  handleChangelanguage: (lang: string) => dispatch(actions.userChangeLanguage(lang))
});

class NavBar extends React.Component<Props, any> {
  componentWillMount() {
    if (localStorage.getItem('interfaceLanguage')) {
      this.props.handleChangelanguage(localStorage.getItem('interfaceLanguage'));
    }
  }

  public render() {
    const lang = this.props.language == 'ru' ? interfaceLanguage.ru : interfaceLanguage.en;
    return (
      <div className="navbar">
        <AppBar position="fixed">
          <Toolbar>
            <Typography type="title" color="inherit" className="title">
              CarFinder
            </Typography>
            <div className="items-left">
              <Link to="/">
                <Button color="contrast">{lang.navigation.homepage}</Button>
              </Link>
              <Link to="/catalog">
                <Button color="contrast">{lang.navigation.catalog}</Button>
              </Link>
            </div>
            <div className="items-right">
              <Button color="contrast" onClick={() => this.props.handleChangelanguage('ru')}>
                {lang.navigation.ruLang}
              </Button>
              <Button color="contrast" onClick={() => this.props.handleChangelanguage('en')}>
                {lang.navigation.engLang}
              </Button>
              <Link to="/signin">
                <Button color="contrast">{lang.navigation.signin}</Button>
              </Link>
              <Link to="/signup">
                <Button color="contrast">{lang.navigation.signup}</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
