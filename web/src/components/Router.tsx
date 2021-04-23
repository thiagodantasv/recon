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
    IconButton
} from '@material-ui/core';
import MenuIcon  from '@material-ui/icons/Menu';
import Products from './Products';
import CreateProduct from './CreateProduct';


function AppRouter(){
    const menu = [
        {
            name:'Products',
            description: 'Products List',
            path: '/products',
            component: Products
        },
        {
            name:'Create a Product',
            description: 'Create a new product',
            path: '/createProducts',
            component: CreateProduct
        }
    ];


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
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setDisplayVerticalMenu(true)}
            edge="start"
          >
            <MenuIcon />
        </IconButton>
        <Drawer
            anchor='left'
            elevation={20}
            open={displayVerticalMenu}
            variant='persistent'
            onClose={() => {setDisplayVerticalMenu(false)}}
        >
          <List>
            <ListItem onClick = {() => setDisplayVerticalMenu(false)}>
              <Link to="/">home</Link>
            </ListItem>
            <ListItem onClick = {() => setDisplayVerticalMenu(false)}>
              <Link to="/products">Products</Link>
            </ListItem>
            <ListItem onClick = {() => setDisplayVerticalMenu(false)}>
              <Link to="/createProduct">Create Product</Link>
            </ListItem>
          </List>
        </Drawer>
      </Router>
    );

    const verticalMenu = (
        
        <Drawer
            anchor='left'
            elevation={20}
            open={displayVerticalMenu}
            variant='temporary'
            onClose={() => {setDisplayVerticalMenu(false)}}
        >
            <List>
                <Router>
                    <Switch>
                        {
                            menu.map((menuItem) => {
                                return(
                                    <ListItem
                                        button
                                        key={menuItem.name}
                                    >
                                        
                                        <Link to={menuItem.path}>{menuItem.name}</Link>
                                        <Route path={menuItem.path}>
                                            {menuItem.component}
                                        </Route>
                                    </ListItem>
                                );
                            })
                        }
                    </Switch>
                </Router>
            </List>
        </Drawer>
    );
    const test = (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
            <li>
              <Link to="/createProduct">Create a product</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/createProduct">
            <div>create product</div>
          </Route>
          <Route path="/">
            <div>bacana</div>
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </div>
    </Router>
    );


    return(
        <div>
            <Button onClick={() => {setDisplayVerticalMenu(true)}}>Click here</Button>
            <Button onClick={() => {setDisplayVerticalMenu(true)}}>butto twop</Button>
            {menuScreen}
        </div>
    );
}
export default AppRouter;