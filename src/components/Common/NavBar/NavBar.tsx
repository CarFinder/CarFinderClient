import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import './style.less';

export interface Props {}

class NavBar extends React.Component<Props, object> {
  render() {
    return (
      <div className="navbar">
        <AppBar position="fixed">
          <Toolbar>
            <Typography type="title" color="inherit" className="title">
              CarFinder
            </Typography>
            <div className="items-left">
              <Link to="/">
                <Button color="contrast">Домашняя</Button>
              </Link>
              <Link to="/catalog">
                <Button color="contrast">Каталог</Button>
              </Link>
            </div>
            <div className="items-right">
              <Link to="/signin">
                <Button color="contrast">Вход</Button>
              </Link>
              <Link to="/signup">
                <Button color="contrast">Регистрация</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
