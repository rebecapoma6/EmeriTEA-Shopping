// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { Stack, Button } from '@mui/material'; // Importa Stack y Button desde Material-UI
// import Typography from '@mui/material/Typography';
// import "./Card.css";

// const ProductCard = ({ product, deleteProduct, openEditModal }) => {
//     return (

//         <Card sx={{ maxWidth: 345 , minWidth: 345}}>
//             <CardMedia
//                 component="img"
//                 alt={product.Name_product}
//                 height="250"
//                 image={product.image}
//             />

//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                     {product.Name_product}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     Category: {product.category}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     Price: {product.price} €
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     Description: {product.description}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     Stock: {product.stock}
//                 </Typography>

//                 <Stack spacing={1} direction="row"  >

//                     <Button onClick={() => deleteProduct(product.id)} variant="contained">Delete</Button>
//                     <Button onClick={() => openEditModal(product)} variant="contained">Edit</Button>

//                 </Stack>
//             </CardContent>
//         </Card>

//     );
// };

// export default ProductCard;

// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { Stack, Button } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import "./Card.css"; // Importa el archivo CSS con los estilos

// const ProductCard = ({ product, deleteProduct, openEditModal }) => {
//   return (
//     <Card className="card">
//       <CardMedia
//         // component="img"
//         alt={product.Name_product}
//         className="cardMedia"
//         image={product.image}
//       />

//       <CardContent className="CardContent">

//         <Typography component="div" className="productTitle">
//           <strong>{product.Name_product}</strong>
//         </Typography>

//         <Typography
//           variant="body2"
//           color="text.secondary"
//           className="productCategory"
//         >
//            <strong>Category:</strong>{product.category}
//         </Typography>

//         <Typography
//           variant="body2"
//           color="text.secondary"
//           className="productDescription"
//         >
//           <strong>Description:</strong> {product.description}
//         </Typography>

//         <div className="unids">
        
//           <Typography
//             variant="body2"
//             color="text.secondary"
//             className="productPrice"
//           >
//            <strong>Price:</strong> {product.price}<strong>€</strong>
//           </Typography>

//           <Typography variant="body2" color="text.secondary">
//            <strong>Stock:</strong>  {product.stock}
//           </Typography>
//         </div>

//         <div className="actionButtons">
            
//           <Button className="actionButtonD"
           
//            onClick={() => deleteProduct(product.id)}
//         //    variant="contained " 
//            >
//             Delete
//           </Button>

//           <Button className="actionButtonE"
//             onClick={() => openEditModal(product)}           
//             // variant="contained"
//             >
//             Edit
//           </Button>

//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductCard;






import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Stack, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./Card.css"; // Importa el archivo CSS con los estilos

const ProductCard = ({ product, deleteProduct, openEditModal }) => {
  return (
    <Card className="card">
      <CardMedia
        className="cardMedia"
        image={product.Image}
        alt={product.Name_product}
      />

      <CardContent className="CardContent">
        <Typography component="div" className="productTitle">
          <strong>{product.Name_product}</strong>
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          className="productCategory"
        >
          <strong>Category:</strong> {product.Id_Category}
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

        {/* Añade el campo para los detalles de tamaño */}
        <Typography variant="body2" color="text.secondary">
          <strong>SizeEEE:</strong> {product.Size}
        </Typography>

        <div className="actionButtons">
          <Button
            className="actionButtonD"
            onClick={() => deleteProduct(product.Id_Product)}
          >
            Delete
          </Button>

          <Button className="actionButtonE" onClick={() => openEditModal(product)}>
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

