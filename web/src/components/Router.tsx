import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import {
    Drawer,
    Button,
    List,
    ListItem,
    ListItemText,
    Icon,
    IconButton,
    Typography,
    Divider
} from '@material-ui/core';
import MenuIcon  from '@material-ui/icons/Menu';

import './../style/mainpage.css';
import Products from './Products';
import CreateProduct from './CreateProduct';
import NotFound from './NotFound';



function AppRouter(){
    
    const [displayVerticalMenu,setDisplayVerticalMenu] = useState(false);
    
    const menuScreen = (
      <Router>
        <Switch>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/createProduct">
            <CreateProduct />
          </Route>
          <Route exact path="/">
            <div>Home Page</div>
            <div>what is cool enough to put in a home page ? </div>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
    return(
        <div className = 'webapp'>
          <header className = 'mainpage-header'>
            <div id = 'mainpage-menuicon'>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setDisplayVerticalMenu(true)}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </header>
            <div>
              <Drawer
              anchor='left'
              elevation={20}
              open={displayVerticalMenu}
              variant='temporary'
              onClose={() => {setDisplayVerticalMenu(false)}}
              >
                <List>
                  <ListItem onClick = {() => setDisplayVerticalMenu(false)}>
                    <Button href = '/' className = 'menu-button'>Home</Button>
                  </ListItem>
                  <Divider variant = 'middle' />
                  <ListItem onClick = {() => setDisplayVerticalMenu(false)}>
                    <Button href = "/products" className = 'menu-button'>Products List</Button>
                  </ListItem>
                  <Divider variant = 'middle' />
                  <ListItem onClick = {() => setDisplayVerticalMenu(false)}>
                    <Button href = "/createProduct" className = 'menu-button'>Create a Product</Button>
                  </ListItem>
                </List>
              </Drawer>
            </div>
            <div>
              {menuScreen}
            </div>
        </div>
    );
}
export default AppRouter;