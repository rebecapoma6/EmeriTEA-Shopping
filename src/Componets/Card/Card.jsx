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
      {product.Image && (
        <CardMedia
          alt={product.Name_product}
          className="cardMedia"
          image={product.Image}
        />
      )}

      <CardContent className="CardContent">
        <Typography component="div" className="productTitle">
          <strong>{product.Name_product}</strong>
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          className="productCategory"
        >
          <strong>Category:</strong>{" "}
          {product.Id_Category === "2" ? "Clothing" : "Accessory"}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          className="productDescription"
        >
          <strong>Description:</strong> {product.Description}
        </Typography>

        <div className="unids">
          <Typography
            variant="body2"
            color="text.secondary"
            className="productPrice"
          >
            <strong>Price:</strong> {product.Price}
            <strong>€</strong>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <strong>Stock:</strong> {product.stock}
          </Typography>
        </div>

        <Typography variant="body2" color="text.secondary">
          {product.Id_Category === "2" && (
            <>
              <strong>Size:</strong>{" "}
              {Array.isArray(product.Size) && product.Size.length > 0 ? (
                <span>{product.Size.join(", ")}</span>
              ) : (
                <span>{product.Size}</span>
              )}
            </>
          )}
        </Typography>

        <div className="actionButtons">
          <Button
            className="actionButtonD"
            onClick={() => deleteProduct(product.id)}
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
