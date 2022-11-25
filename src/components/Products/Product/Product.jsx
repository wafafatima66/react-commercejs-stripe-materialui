import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
// import { AddShoppingCart } from '@mui/icons-material';



import useStyles from './styles';

const Product = ({product , onAddToCart}) => {

  const classes = useStyles();

//   const handleAddToCart = () => onAddToCart(product.id, 1);

  // console.log(product)

  // return <div>test</div>

  return (
    <Card className={[classes.root , classes.marginTop]}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />

        {/* <Typography gutterBottom variant="h5" color="textSecondary">
            {product.description}
          </Typography> */}

      </CardContent>
      {/* <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={()=>onAddToCart(product.id , 1 )}>
          <AddShoppingCart />
        </IconButton>
      </CardActions> */}

        <h6 className={classes.heroButtonArea}>
            <button className={classes.button1} onClick={()=>onAddToCart(product.id , 1 )}>
              Add to Cart
            </button>
          </h6>
    </Card>
  );
};

export default Product;