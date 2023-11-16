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
    Size: [],
    showSize: false,
  });

  const resetNewProductForm = () => {
    setNewProduct({
      Name_product: "",
      Id_Category: "",
      Price: "",
      Image: "",
      Description: "",
      stock: "",
      Size: [],
      showSize: false,
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

  const openAddModal = () => {
    onOpen();
    resetNewProductForm();
  };

  const closeAddModal = () => {
    onOpenChange();
    // onclose();
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleInputChange = (name, value) => {
    setNewProduct((prevProduct) => {

     let updatedProduct = {
       ...prevProduct,
       Id_Category: value,
       showSize: value === "2",
     };
   
     if (value === "1") {
       updatedProduct.Size = [];
     }

     updatedProduct = {
      ...prevProduct,
      [name]: value,
    };
   
     return updatedProduct;
    });
   };
   
   useEffect(() => {
    setNewProduct((prevProduct) => {
     let updatedProduct = {
       ...prevProduct,
       showSize: prevProduct.Id_Category === "2",
     };
   
     if (!updatedProduct.showSize) {
       updatedProduct.Size = [];
     }
   
     return updatedProduct;
    });
   }, [newProduct.Id_Category]);

  const addProduct = () => {
    const productData = {
      id: Date.now(),
      Name_product: newProduct.Name_product,
      Id_Category: newProduct.Id_Category,
      Price: newProduct.Price,
      Image: newProduct.Image,
      Description: newProduct.Description,
      stock: newProduct.stock,
      Size: newProduct.Size,
      Id_Administrador: Date.now(),
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
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        setProducts([...products, data]);
        closeAddModal();
        resetNewProductForm();
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
            console.error("Status:", error.status);
            console.error("Text:", error.statusText);
            Swal.fire("Error", "No se ha podido eliminar el producto", "error");
          });
      }
    });
  };

  // Actualiza showSize y Size cuando Id_Category cambia en el modal de edición
  const openEditModal = (product) => {
    if (product && product.id) {
      setIsEditModalOpen(true);
      let productDetails = { ...product };
      setSelectedProductDetails(productDetails);
    } else {
      console.error(
        "Error: No se puede abrir el modal de edición, falta el ID del producto."
      );
    }
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
        const editedProductData = {
          Name_product: selectedProductDetails.Name_product,
          Id_Category: selectedProductDetails.Id_Category,
          Price: selectedProductDetails.Price,
          Image: selectedProductDetails.Image,
          Description: selectedProductDetails.Description,
          stock: selectedProductDetails.stock,
          Size: selectedProductDetails.Id_Category === "1" ? [] : selectedProductDetails.Size,
        };

        fetch(`http://localhost:3000/products/${selectedProductDetails.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedProductData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to edit the product");
            }
            closeEditModal();
            setProducts((prevProducts) =>
              prevProducts.map((product) =>
                product.id === selectedProductDetails.id
                  ? { ...product, ...editedProductData }
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
                  // id="productName"
                  value={newProduct.Name_product}
                  onChange={(e) =>
                    handleInputChange("Name_product", e.target.value)
                  }
                />

                <label htmlFor="productId_Category">Category:</label>
                <select
                  // id="productCategory"
                  value={newProduct.Id_Category}
                  onChange={(e) => {
                    handleInputChange("Id_Category", e.target.value);
                    if (e.target.value === "1") {
                      handleInputChange("1", e.target.value);
                    } else {
                      handleInputChange("2", e.target.value);
                    }
                  }}
                >
                  <option value="">Select a Category</option>
                  <option value="1">Accessories</option>
                  <option value="2">Clothing</option>
                </select>
                <br />

                {newProduct.showSize && (
                  <>
                    <label htmlFor="productSize">Size:</label>
                    <select
                      // id="productSize"
                      value={newProduct.Size}
                      onChange={(e) =>
                        handleInputChange("Size", e.target.value)
                      }
                    >
                      <option value="">Select a size</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                  </>
                )}

                <label htmlFor="productPrice">Price:</label>
                <input
                  type="text"
                  // id="productPrice"
                  value={newProduct.Price}
                  onChange={(e) => handleInputChange("Price", e.target.value)}
                />
                <br></br>

                <label className="product-Image" htmlFor="productImage">
                  Image URL:
                </label>
                <input
                  type="text"
                  // id="productImage"
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
                  // id="productDescription"
                  value={newProduct.Description}
                  onChange={(e) =>
                    handleInputChange("Description", e.target.value)
                  }
                ></textarea>

                <br></br>

                <label htmlFor="productStock">Stock:</label>
                <input
                  type="text"
                  // id="productStock"
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

                  <label htmlFor="productSizeDetails">Talla:</label>
                  {selectedProductDetails.Id_Category === "2" && (
                    <select
                      // id="productSizeDetails"
                      value={
                        selectedProductDetails.Size &&
                        selectedProductDetails.Size.length > 0
                          ? selectedProductDetails.Size[0]
                          : ""
                      }
                      onChange={(e) =>
                        setSelectedProductDetails({
                          ...selectedProductDetails,
                          Size: [e.target.value],
                        })
                      }
                    >
                      <option value="">Selecciona una talla</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                  )}
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
