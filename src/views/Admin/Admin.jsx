import React, { useState, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';
import Swal from 'sweetalert2';
import './Admin.css';

const Admin = () => {

    const [products, setProducts] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedProductDetails, setSelectedProductDetails] = useState(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onOpenChange: onDetailsOpenChange } = useDisclosure();

    const [newProduct, setNewProduct] = useState({
        name: '',
        category: '',
        price: '',
        image: '',
        description: '',
        stock: '',
        id: '',
    });

    const handleInputChange = (field, value) => {
        setNewProduct({ ...newProduct, [field]: value });
    };

    const openAddModal = () => {
        onOpen();
        setNewProduct({});
    };

    const closeAddModal = () => {
        onOpenChange();
    };

    const openEditModal = (product) => {
        setSelectedProductDetails(product);
        setIsEditModalOpen(true);
    };
    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };


    const addProduct = () => {
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then((response) => response.json())
            .then((data) => {
                setProducts([...products, data]);
                closeAddModal();
                Swal.fire('Success', 'Product added successfully', 'success');
            })
            .catch((error) => {
                console.error('Error:', error);
                Swal.fire('Error', 'Failed to add product', 'error');
            });
    };

    const deleteProduct = (id) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                const updatedProducts = products.filter((product) => product.id !== id);
                setProducts(updatedProducts);
                Swal.fire('Success', 'Product deleted successfully', 'success');
            })
            .catch((error) => {
                console.error('Error:', error);
                Swal.fire('Error', 'Failed to delete product', 'error');
            });
    };

    const editProduct = () => {
        fetch(`http://localhost:3000/products/${selectedProductDetails.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedProductDetails),
        })
            .then((response) => {
                if (response.ok) {
                    closeEditModal(); // Cierra el modal después de la edición
                    Swal.fire('Success', 'Product edited successfully', 'success');
                } else {
                    throw new Error('Failed to edit the product');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                Swal.fire('Error', 'Failed to edit product', 'error');
            });
    };

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error:', error));
    }, []);


    return (
        <> 
        <h1>HOLA ADMIN</h1>
            <Button className='modal-header' onClick={openAddModal}>Add Product</Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
                <ModalContent className='jarra'>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Add Product</ModalHeader>
                        <ModalBody className="modal-form">
                            <form>
                                <label htmlFor="productName">Name:</label>
                                <input
                                    type="text"
                                    id="productName"
                                    value={newProduct.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                />

                                <label htmlFor="productCategory">Category:</label>
                                <input
                                    type="text"
                                    id="productCategory"
                                    value={newProduct.category}
                                    onChange={(e) => handleInputChange('category', e.target.value)}
                                />

                                <label htmlFor="productPrice">Price:</label>
                                <input
                                    type="text"
                                    id="productPrice"
                                    value={newProduct.price}
                                    onChange={(e) => handleInputChange('price', e.target.value)}
                                />

                                {newProduct.image && (
                                    <img src={newProduct.image} alt="Product Image" className="product-image" />
                                )}
                                <label className="product-image" htmlFor="productImage">Image URL:</label>
                                <input
                                    type="text"
                                    id="productImage"
                                    value={newProduct.image}
                                    onChange={(e) => handleInputChange('image', e.target.value)}
                                />

                                <label htmlFor="productDescription">Description:</label>
                                <textarea
                                    id="productDescription"
                                    value={newProduct.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                ></textarea>

                                <label htmlFor="productStock">Stock:</label>
                                <input
                                    type="text"
                                    id="productStock"
                                    value={newProduct.stock}
                                    onChange={(e) => handleInputChange('stock', e.target.value)}
                                />
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onClick={closeAddModal}>
                                Close
                            </Button>
                            <Button color="primary" onClick={addProduct}>
                                Add
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>


            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <p>Category: {product.category}</p>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                        <p>Stock: {product.stock}</p>
                        <Button onClick={() => deleteProduct(product.id)}>Delete</Button>
                        <Button onClick={() => openEditModal(product)}>Edit</Button>

                    </div>
                ))}
            </div>


        </>
    );
}

export default Admin;