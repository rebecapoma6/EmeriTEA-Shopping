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
    Id_Category: "",
    Price: "",
    Image: "",
    Description: "",
    stock: "",
    Size: "",
  });

  const handleInputChange = (field, value) => {
    setNewProduct({ ...newProduct, [field]: value });
  };

  // Función para limpiar el formulario de agregar producto
  const resetNewProductForm = () => {
    setNewProduct({
      Name_product: "",
      Id_Category: "",
      Price: "",
      Image: "",
      Description: "",
      stock: "",
      Size: "",
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
      Id_Category: newProduct.Id_Category,
      Price: newProduct.Price,
      Image: newProduct.Image,
      Description: newProduct.Description,
      stock: newProduct.stock,
      Size: newProduct.Size,
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
          return response.json().then((err) => {
            throw new Error(err.message);
          });
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
  },[]);

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

                <label htmlFor="productId_Category">Id_Category:</label>
                <select
                  id="productId_Category"
                  value={newProduct.Id_Category}
                  onChange={(e) =>
                    handleInputChange("Id_Category", e.target.value)
                  }
                >
                  <option value="">Select a Id_Category</option>
                  <option value="1">Accessories</option>
                  <option value="2">Clothing</option>
                </select>
                <br />

                <label htmlFor="productPrice">Price:</label>
                <input
                  type="text"
                  id="productPrice"
                  value={newProduct.Price}
                  onChange={(e) => handleInputChange("Price", e.target.value)}
                />
                <br></br>

                <label className="product-Image" htmlFor="productImage">
                  Image URL:
                </label>
                <input
                  type="text"
                  id="productImage"
                  value={newProduct.Image}
                  onChange={(e) => handleInputChange("Image", e.target.value)}
                />
                {newProduct.Image && (
                  <img
                    src={newProduct.Image}
                    alt="Product Image"
                    className="product-Image"
                  />
                )}
                <br></br>

                <label htmlFor="productDescription">Description:</label>
                <textarea
                  id="productDescription"
                  value={newProduct.Description}
                  onChange={(e) =>
                    handleInputChange("Description", e.target.value)
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
                <br></br>
                <label htmlFor="productSizeDetails">Size:</label>
                <input
                  type="text"
                  id="productSizeDetails"
                  value={newProduct.Size}
                  onChange={(e) => handleInputChange("Size", e.target.value)}
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
            key={product.Id_Product}
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

                  <label htmlFor="productId_Category">Id_Category:</label>
                  <select
                    value={selectedProductDetails.Id_Category}
                    onChange={(e) =>
                      setSelectedProductDetails({
                        ...selectedProductDetails,
                        Id_Category: e.target.value,
                      })
                    }
                  >
                    <option value="">Select a </option>
                    <option value="1">Accessories</option>
                    <option value="2">Clothing</option>
                  </select>
                  <br></br>

                  <label htmlFor="productPrice">Price:</label>
                  <input
                    type="text"
                    value={selectedProductDetails.Price}
                    onChange={(e) =>
                      setSelectedProductDetails({
                        ...selectedProductDetails,
                        Price: e.target.value,
                      })
                    }
                  />

                  <label htmlFor="productImage">Image URL:</label>
                  <input
                    type="text"
                    value={selectedProductDetails.Image}
                    onChange={(e) =>
                      setSelectedProductDetails({
                        ...selectedProductDetails,
                        Image: e.target.value,
                      })
                    }
                  />

                  <label htmlFor="productDescription">Description:</label>
                  <textarea
                    value={selectedProductDetails.Description}
                    onChange={(e) =>
                      setSelectedProductDetails({
                        ...selectedProductDetails,
                        Description: e.target.value,
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

                  <label htmlFor="productSizeDetails">Size :</label>
                  <input
                    type="text"
                    value={selectedProductDetails.Size}
                    onChange={(e) =>
                      setSelectedProductDetails({
                        ...selectedProductDetails,
                        Size: e.target.value,
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
