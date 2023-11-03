import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product, deleteProduct, openEditModal }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={product.Name_product}
        height="150"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.Name_product}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {product.price} €
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {product.stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteProduct(product.id)}>Delete</Button>
        <Button onClick={() => openEditModal(product)}>Edit</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
