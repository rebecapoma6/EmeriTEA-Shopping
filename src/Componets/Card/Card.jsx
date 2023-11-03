import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Stack, Button } from '@mui/material'; // Importa Stack y Button desde Material-UI
import Typography from '@mui/material/Typography';
import "./Card.css";

const ProductCard = ({ product, deleteProduct, openEditModal }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={product.Name_product}
                height="300"               
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

                <Stack spacing={2} direction="row"  >

                    <Button onClick={() => deleteProduct(product.id)} variant="contained">Delete</Button>
                    <Button onClick={() => openEditModal(product)} variant="contained">Edit</Button>

                </Stack>
            </CardContent>
        </Card>

    );
};

export default ProductCard;
