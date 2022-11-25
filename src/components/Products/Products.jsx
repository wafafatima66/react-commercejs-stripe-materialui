import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import Product from './Product/Product';
import {Hero} from "../../components";

import useStyles from './styles';

// const products = [
//     {id : 1 , name : 'apple mac' , description : 'this is apple mac' , price : '$67'},
//     {id : 2 , name : 'chrome book' , description : 'this is chrome book' , price : '$67'}
// ]

const Products = ({products , onAddToCart}) => {

  const classes = useStyles();

  // console.log(products)

  // return <div>test</div>

  return (
    <main>
       <Hero/>
      <Grid container justify="center" spacing={5} className={classes.container} >
      {/* <h1 className={classes.heroText}>Products</h1> */}
        { products ? (
                products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))
        ) : (

          <Typography variant="h6" gutterBottom>No product Yet ! </Typography>

        )}
      </Grid>
    </main>
  );
};

export default Products;