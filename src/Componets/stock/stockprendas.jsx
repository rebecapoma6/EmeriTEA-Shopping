// // import React, { useState, useEffect } from "react";
// // import "./stockprendas.css";

// // const Stockprendas = ({ addToCart }) => {
// //   const [products, setProducts] = useState([]);
// //   const [selectedSizes, setSelectedSizes] = useState({});

// //   useEffect(() => {
// //     //fetch("http://localhost:3000/products?category=Clothing")
// //     fetch("http://localhost:3000/products?Id_Category=Clothing")
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch products");
// //         }
// //         return response.json();
// //       })
// //       .then((data) => {
// //         setProducts(data);
// //         // Inicializa las tallas seleccionadas para cada producto
// //         const initialSelectedSizes = {};
// //         data.forEach((product) => {
// //           initialSelectedSizes[product.id] = "";
// //         });
// //         setSelectedSizes(initialSelectedSizes);
// //       })
// //       .catch((error) => console.error("Error:", error));
// //   }, []);

// //   const handleSizeChange = (productId, size) => {
// //     setSelectedSizes((prevSizes) => ({ ...prevSizes, [productId]: size }));
// //   };

// //   return (
// //     <>
// //       <div className="Prendas">Prendas</div>

// //       <div className="product-list">
// //         {products.map((product) => (
// //           <div key={product.Id_Product}>
// //             <img
// //               src={product.Image}
// //               alt={product.name}
// //               className="product-image"
// //             />
// //             <p>Name: {product.Name_product}</p>
// //             <p>Price: {product.Price} €</p>
// //             <p>Descripcion: {product.Description} </p>
// //             <select
// //               className="tallaje"
// //               value={selectedSizes[product.Id_Product] || ""}
// //               onChange={(e) => handleSizeChange(product.Id_Product, e.target.value)}
// //             >
// //               <option value="">Seleccione Talla</option>
// //               <option value="XS">XS</option>
// //               <option value="S">S</option>
// //               <option value="M">M</option>
// //               <option value="L">L</option>
// //               <option value="XL">XL</option>
// //             </select>
// //             <button onClick={() => addToCart({ ...product, Size: selectedSizes[product.Id_Product] })}>
// //               🛒
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default Stockprendas;





// import React, { useState, useEffect } from "react";
// import "./stockprendas.css";

// const Stockprendas = ({ addToCart }) => {
//   const [products, setProducts] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState({});

//   useEffect(() => {
//     fetch("http://localhost:3000/products?Id_Category=Clothing")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setProducts(data);
//         // Inicializa las tallas seleccionadas para cada producto
//         const initialSelectedSizes = {};
//         data.forEach((product) => {
//           initialSelectedSizes[product.Id_Product] = "";
//         });
//         setSelectedSizes(initialSelectedSizes);
//       })
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   const handleSizeChange = (productId, size) => {
//     setSelectedSizes((prevSizes) => {
//       return {
//         ...prevSizes,
//         [productId]: size,
//       };
//     });
//   };

//   const handleAddToCart = (product) => {
//     addToCart({ ...product, Size: selectedSizes[product.Id_Product] });
//   };

//   return (
//     <>
//       <div className="Prendas">Prendas</div>

//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.Id_Product}>
//             <img
//               src={product.Image}
//               alt={product.name}
//               className="product-image"
//             />
//             <p>Name: {product.Name_product}</p>
//             <p>Price: {product.Price} €</p>
//             <p>Descripcion: {product.Description} </p>
//             <select
//               className="tallaje"
//               value={selectedSizes[product.Id_Product] || ""}
//               onChange={(e) => handleSizeChange(product.Id_Product, e.target.value)}
//             >
//               <option value="">Seleccione Talla</option>
//               <option value="XS">XS</option>
//               <option value="S">S</option>
//               <option value="M">M</option>
//               <option value="L">L</option>
//               <option value="XL">XL</option>
//             </select>
//             <button onClick={() => handleAddToCart(product)}>
//               🛒
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Stockprendas;

import React, { useState, useEffect } from "react";
import "./stockprendas.css";

const Stockprendas = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products?Id_Category=Clothing")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        // Agregar la propiedad selectedSize a cada producto
        const productsWithSizes = data.map((product) => ({
          ...product,
          selectedSize: "",
        }));
        setProducts(productsWithSizes);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSizeChange = (index, size) => {
    setProducts((prevProducts) => {
      const newProducts = [...prevProducts];
      newProducts[index].selectedSize = size;
      return newProducts;
    });
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, Size: product.selectedSize });
  };

  return (
    <>
      <div className="Prendas">Prendas</div>

      <div className="product-list">
        {products.map((product, index) => (
          <div key={product.Id_Product}>
            <img
              src={product.Image}
              alt={product.name}
              className="product-image"
            />
            <p>Name: {product.Name_product}</p>
            <p>Price: {product.Price} €</p>
            <p>Descripcion: {product.Description} </p>
            <select
              className="tallaje"
              value={product.selectedSize}
              onChange={(e) => handleSizeChange(index, e.target.value)}
            >
              <option value="">Seleccione Talla</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <button onClick={() => handleAddToCart(product)}>
              🛒
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stockprendas;

