import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Swal from "sweetalert2";
import "./Admin.css";
import ProductCard from "../../Componets/Card/Card";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [newProduct, setNewProduct] = useState({
    Name_product: "",
    category: "",
    price: "",
    image: "",
    description: "",
    stock: "",
  });

  const handleInputChange = (field, value) => {
    setNewProduct({ ...newProduct, [field]: value });
  };

  // Función para limpiar el formulario de agregar producto
  const resetNewProductForm = () => {
    setNewProduct({
      Name_product: "",
      category: "",
      price: "",
      image: "",
      description: "",
      stock: "",
    });
  };

  const openAddModal = () => {
    onOpen();
    resetNewProductForm();
  };

  const closeAddModal = () => {
    onOpenChange();
  };

  const openEditModal = (product) => {
    setIsEditModalOpen(true);
    setSelectedProductDetails(product);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const addProduct = () => {
    const productData = {
      Name_product: newProduct.Name_product,
      category: newProduct.category,
      price: newProduct.price,
      image: newProduct.image,
      description: newProduct.description,
      stock: newProduct.stock,
    };

    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add product");
        }
        return response.json();
      })
      .then((data) => {
        setProducts([...products, data]);
        closeAddModal();
        Swal.fire("Success", "Product added successfully", "success");
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire("Error", "Failed to add product", "error");
      });
  };

  const deleteProduct = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el producto. ¿Deseas continuar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            const updatedProducts = products.filter(
              (product) => product.id !== id
            );
            setProducts(updatedProducts);
            Swal.fire("Éxito", "Producto eliminado con éxito", "success");
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Error", "No se ha podido eliminar el producto", "error");
          });
      }
    });
  };

  const editProduct = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción editará el producto. ¿Deseas continuar?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, editar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/products/${selectedProductDetails.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedProductDetails),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to edit the product");
            }
            closeEditModal(); // Cierra el modal después de la edición
            setProducts(
              products.map((product) =>
                product.id === selectedProductDetails.id
                  ? selectedProductDetails
                  : product
              )
            );
            Swal.fire("Éxito", "Producto editado con éxito", "success");
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Error", "No se ha podido editar el producto", "error");
          });
      }
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
    
      <div className="add-header">
        <h1>AÑADIR PRODUCTOS</h1>
      </div>

      <br />
      <Button className="modal-header" onClick={openAddModal}>
        Add Product
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        className="nextui-modal"
      >
        <ModalContent className="add-form">
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add Product
            </ModalHeader>
            <ModalBody>
              <form className="add-2">
                <label htmlFor="productName">Name:</label>
                <input
                  type="text"
                  id="productName"
                  value={newProduct.Name_product}
                  onChange={(e) =>
                    handleInputChange("Name_product", e.target.value)
                  }
                />

                <label htmlFor="productCategory">Category:</label>
                <select
                  id="productCategory"
                  value={newProduct.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                >
                  <option value="">Select a category</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Clothing">Clothing</option>
                </select>
                <br />

                <label htmlFor="productPrice">Price:</label>
                <input
                  type="text"
                  id="productPrice"
                  value={newProduct.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                />
                <br></br>

                <label className="product-image" htmlFor="productImage">
                  Image URL:
                </label>
                <input
                  type="text"
                  id="productImage"
                  value={newProduct.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                />
                {newProduct.image && (
                  <img
                    src={newProduct.image}
                    alt="Product Image"
                    className="product-image"
                  />
                )}
                <br></br>

                <label htmlFor="productDescription">Description:</label>
                <textarea
                  id="productDescription"
                  value={newProduct.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                ></textarea>

                <br></br>

                <label htmlFor="productStock">Stock:</label>
                <input
                  type="text"
                  id="productStock"
                  value={newProduct.stock}
                  onChange={(e) => handleInputChange("stock", e.target.value)}
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
          <ProductCard
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
            openEditModal={openEditModal}
          />
        ))}
      </div>

      {isEditModalOpen && selectedProductDetails && (
        <Modal
          isOpen={isEditModalOpen}
          onOpenChange={closeEditModal}
          isDismissable={false}
          className="nextui-modal"
        >
          <ModalContent className="formSection">
            <>
              <ModalHeader>Edit Product</ModalHeader>
              <ModalBody>
                <form>
                  <label htmlFor="productName">Name:</label>
                  <input
                    type="text"
                    value={selectedProductDetails.Name_product}
                    onChange={(e) =>
                      setSelectedProductDetails({
                        ...selectedProductDetails,
                        Name_product: e.target.value,
                      })
                    }
                  />

                  <label htmlFor="productCategory">Category:</label>
                  <select
                    value={selectedProductDetails.category}
                    onChange={(e) =>
                      setSelectedProductDetails({
                        ...selectedProductDetails,
                        category: e.target.value,
                      })
                    }
                  >
                    <option value="">Select a </option>
                    <option value="Accessories">Accessories</option>
                    <option value="Clothing">Clothing</option>
                  </select>
                  <br></br>

                  <label htmlFor="productPrice">Price:</label>
                  <input
                    type="text"
                    value={selectedProductDetails.price}
                    onChange={(e) =>
                      setSelectedProductDetails({
                        ...selectedProductDetails,
                        price: e.target.value,
                      })
                    }
                  />

                  <label htmlFor="productImage">Image URL:</label>
                  <input
                    type="text"
                    value={selectedProductDetails.image}
                    onChange={(e) =>
                      setSelectedProductDetails({
                        ...selectedProductDetails,
                        image: e.target.value,
                      })
                    }
                  />

                  <label htmlFor="productDescription">Description:</label>
                  <textarea
                    value={selectedProductDetails.description}
                    onChange={(e) =>
                      setSelectedProductDetails({
                        ...selectedProductDetails,
                        description: e.target.value,
                      })
                    }
                  ></textarea>

                  <label htmlFor="productStock">Stock:</label>
                  <input
                    type="text"
                    value={selectedProductDetails.stock}
                    onChange={(e) =>
                      setSelectedProductDetails({
                        ...selectedProductDetails,
                        stock: e.target.value,
                      })
                    }
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="btn-close"
                  color="danger"
                  variant="light"
                  onClick={closeEditModal}
                >
                  Cerrar
                </Button>
                <Button
                  className="btn-save"
                  color="primary"
                  onClick={editProduct}
                >
                  Guardar
                </Button>
              </ModalFooter>
            </>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Admin;
