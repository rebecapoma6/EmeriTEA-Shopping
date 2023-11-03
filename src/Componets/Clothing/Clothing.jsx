import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Clothing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products?category=Clothing')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                return response.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <p>Name: {product.Name_product}</p>
                    <p>Price: {product.price} €</p>
                    <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="XS" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="S" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="M" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="L" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="XL" />
                    </FormGroup>
                    <button>🛒</button>
                </div>
            ))}
        </div>
    );
};

export default Clothing;




