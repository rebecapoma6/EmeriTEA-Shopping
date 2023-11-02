// import React from 'react';
// import './Clothing.css';

// function Clothing() {
//   return (
//     <div>
//       <h1>Hola Clothing</h1>
//       carrousel de prendas
//       <p>¡Bienvenido a Hola Clothing! Esta es una tienda de ropa increíble.</p>


//     </div>
//   );
// }

// export default Clothing;

// import React, { useState, useEffect } from 'react';

// const Clothing = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3000/products?category=Clothing') // Endpoint para obtener productos de la categoría "Clothing"
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch products');
//                 }
//                 return response.json();
//             })
//             .then((data) => setProducts(data))
//             .catch((error) => console.error('Error:', error));
//     }, []);

//     return (
//         <div className="product-list">
//             {products.map((product) => (
//                 <div key={product.id}>
//                     <img src={product.image} alt={product.name} className="product-image" />
//                     <p>Name: {product.Name_product}</p>
//                     <p>Price: {product.price} €</p>

//                     <button>🛒</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Clothing;

// import React, { useState, useEffect } from 'react';
// import { Form } from 'react-bootstrap';
// import { Switch } from "@nextui-org/react";

// const Clothing = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3000/products?category=Clothing') // Endpoint para obtener productos de la categoría "Clothing"
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch products');
//                 }
//                 return response.json();
//             })
//             .then((data) => setProducts(data))
//             .catch((error) => console.error('Error:', error));
//     }, []);

//     return (
//         <div className="product-list">
//             {products.map((product) => (
//                 <div key={product.id}>
//                     <img src={product.image} alt={product.name} className="product-image" />
//                     <p>Name: {product.Name_product}</p>
//                     <p>Price: {product.price} €</p>


//                     <div className="flex gap-4">
//                         <Switch defaultSelected size="sm">S</Switch>
//                         <Switch defaultSelected size="md">M</Switch>
//                         <Switch defaultSelected size="lg">L</Switch>
//                         <Switch defaultSelected size="lg">XL</Switch>
//                     </div>
//                     <button>🛒</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Clothing;


import React, { useState, useEffect } from 'react';


const Clothing = () => {
    const [products, setProducts] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState({});

    useEffect(() => {
        fetch('http://localhost:3000/products?category=Clothing')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                return response.json();
            })
            .then((data) => {
                // Initialize the selectedSizes state
                const initialSelectedSizes = {};
                data.forEach((product) => {
                    initialSelectedSizes[product.id] = ''; // Initialize each product's selected size as an empty string
                });
                setSelectedSizes(initialSelectedSizes);
                setProducts(data);
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    const handleSizeChange = (e, productId) => {
        const selectedSize = e.target.value;

        setSelectedSizes({
            ...selectedSizes,
            [productId]: selectedSize, // Update the selected size for the specific product ID
        });
    };

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <p>Name: {product.Name_product}</p>
                    <p>Price: {product.price} €</p>

                    <div>
                        <label htmlFor={`productSize-${product.id}`}>Size:</label>
                        <select id={`productSize-${product.id}`} onChange={(e) => handleSizeChange(e, product.id)}>
                            <option value="">Select a size</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                            {/* Agrega las tallas adicionales según tus necesidades */}
                        </select>
                    </div>

                 
                    <button>🛒</button>
                </div>
            ))}
        </div>
    );
};

export default Clothing;



