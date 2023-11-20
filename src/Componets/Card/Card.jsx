import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./Card.css"; // Importa el archivo CSS con los estilos

const ProductCard = ({ product, deleteProduct, openEditModal }) => {
  return (
    <Card className="card">
      {product.image && (
        <CardMedia
          alt={product.name_product}
          className="cardMedia"
          image={product.image}
        />
      )}

      <CardContent className="CardContent">
        <Typography component="div" className="productTitle">
          <strong>{product.name_product}</strong>
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          className="productCategory"
        >
          <strong>Categoría:</strong>{" "}
          {product.id_Category === 2 ? "Prenda" : "Accesorio"}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          className="productDescription"
        >
          <strong>Descripción:</strong> {product.description}
        </Typography>

        <div className="unids">
          <Typography
            variant="body2"
            color="text.secondary"
            className="productPrice"
          >
            <strong>Precio:</strong> {product.price}
            <strong>€</strong>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <strong>Stock:</strong> {product.stock}
          </Typography>
        </div>

        <Typography variant="body2" color="text.secondary">
          {product.id_Category === 2 && (
            <>
              <strong>Talla:</strong>{" "}
              {Array.isArray(product.size) && product.size.length > 0 ? (
                <span>{product.size.join(", ")}</span>
              ) : (
                <span>{product.size}</span>
              )}
            </>
          )}
        </Typography>

        <div className="actionButtons">
          <Button
            className="actionButtonD"
            onClick={() => deleteProduct(product.id_product)}
          >
            Eliminar
          </Button>

          <Button
            className="actionButtonE"
            onClick={() => openEditModal(product)}
          >
            Editar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;