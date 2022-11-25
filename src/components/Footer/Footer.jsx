import React from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from "../../assets/logo-2.png";
import useStyles from './styles';


const Footer = () => {
    const classes = useStyles();
    const location = useLocation();

  return (
    <>
    <div className={classes.footerArea}>
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
          color="inherit"
        >
          <img
            src={logo}
            alt="commerce.js"
            height="75px"
            className={classes.image}
          />
        </Typography>
      </Toolbar>
      </div>
    </>
  );
};

export default Footer;
