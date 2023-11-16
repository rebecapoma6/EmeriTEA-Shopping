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
  const [showEditSize, setShowEditSize] = useState(false);

  const [newProduct, setNewProduct] = useState({
    Name_product: "",
    Id_Category: "",
    Price: "",
    Image: "",
    Description: "",
    stock: "",
    Size: [],
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
    });
  };

  // useEffect(() => {
  //   fetch("http://localhost:3000/products")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch products");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error))
      .finally(() => {
        // Después de cargar los productos, verifica si hay un producto seleccionado
        // y abre el modal de edición si es necesario
        if (selectedProductDetails) {
          setIsEditModalOpen(true);
        }
      });
  }, [selectedProductDetails]);
  

  const openAddModal = () => {
    onOpen();
    resetNewProductForm();
  };

  const closeAddModal = () => {
    onOpenChange();
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleInputChange = (name, value) => {
    setNewProduct((prevProduct) => {
      switch (name) {
        case "Id_Category":
          return {
            ...prevProduct,
            Id_Category: value,
            showEditSize: value === "Clothing",
          };
        case "Size":
          return {
            ...prevProduct,
            Size: [...prevProduct.Size, value],
          };
        default:
          return {
            ...prevProduct,
            [name]: value,
          };
      }
    });
  };
  

  const openEditModal = (product) => {
    // console.log("Abrir Modal de Edición para el producto:", product);

    console.log("Entrando a openEditModal");
    console.log("Producto recibido:", product);

    if (product && product.Id_Product) {
      console.log("Producto válido para edición");
      setIsEditModalOpen(true);
      setSelectedProductDetails({ ...product });
      setShowEditSize(product.Id_Category === "Clothing");
    } else {
      // console.error(
      //   "Error: No se puede abrir el modal de edición, falta el ID del producto."
      // );
    }
  };

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
          // throw new Error("Failed to add product");
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

  // const editProduct = () => {
  //   Swal.fire({
  //     title: "¿Estás seguro?",
  //     text: "Esta acción editará el producto. ¿Deseas continuar?",
  //     icon: "info",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Sí, editar",
  //     cancelButtonText: "Cancelar",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       const editedProductData = {
  //         Name_product: selectedProductDetails.Name_product,
  //         Id_Category: selectedProductDetails.Id_Category,
  //         Price: selectedProductDetails.Price,
  //         Image: selectedProductDetails.Image,
  //         description: selectedProductDetails.description,
  //         stock: selectedProductDetails.stock,
  //         Size: showEditSize ? selectedProductDetails.Size : [],
  //         showSize: showEditSize,
  //       };

  //       fetch(
  //         `http://localhost:3000/products/${selectedProductDetails.Id_Product}`,
  //         {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(editedProductData),
  //         }
  //       )
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error("Failed to edit the product");
  //           }
  //           closeEditModal();
  //           setProducts((prevProducts) =>
  //             prevProducts.map((product) =>
  //               product.Id_Product === selectedProductDetails.Id_Product
  //                 ? { ...product, ...editedProductData }
  //                 : product
  //             )
  //           );
  //           Swal.fire("Éxito", "Producto editado con éxito", "success");
  //         })
  //         .catch((error) => {
  //           console.error("Error:", error);
  //           Swal.fire("Error", "No se ha podido editar el producto", "error");
  //         });
  //     }
  //   });
  // };

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
          description: selectedProductDetails.description,
          stock: selectedProductDetails.stock,
          Size: selectedProductDetails.Size || [],
        showEditSize: selectedProductDetails.Id_Category === "Clothing",
        };
  
        fetch(
          `http://localhost:3000/products/${selectedProductDetails.Id_Product}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editedProductData),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al editar el producto");
            }
            
            setProducts((prevProducts) =>
              prevProducts.map((product) =>
                product.Id_Product === selectedProductDetails.Id_Product
                  ? { ...product, ...editedProductData }
                  : product
              )
            );
            closeEditModal();
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

                <label htmlFor="productCategory">Category:</label>
                <select
                  value={newProduct.Id_Category}
                  onChange={(e) => {
                    handleInputChange("Id_Category", e.target.value);
                  }}
                >
                  <option value="">Select a category</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Clothing">Clothing</option>
                </select>
                <br />

                {newProduct.showSize && (
                  <>
                    <label htmlFor="productSize">Size:</label>
                    <select
                      value={newProduct.Size}
                      onChange={(e) => handleInputChange("Size", e.target.value)}
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

                <label className="product-image" htmlFor="productImage">
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
                    className="product-image"
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
            showEditSize={product.Id_Category === "Clothing"}
          />
        ))}
      </div>

      {isEditModalOpen && selectedProductDetails ? (
        <Modal
          // isOpen={isEditModalOpen}
          // onOpenChange={closeEditModal}
          // isDismissable={false}
          // className="nextui-modal"
          isOpen={isEditModalOpen}
          onOpenChange={() => setIsEditModalOpen(false)}
          isDismissable={false}
          className="nextui-modal"
        >
          <ModalContent className="formSection">
            <div>
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
                        showEditSize: e.target.value === "Clothing",
                      })
                    }
                  >
                    <option value="">Select a category</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Clothing">Clothing</option>
                  </select>
                  <br />

                  {selectedProductDetails.showEditSize && (
                    <>
                      <label htmlFor="productSizeDetails">Talla:</label>
                      <select
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
                    </>
                  )}

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
            </div>
          </ModalContent>
        </Modal>
      ) : null}

    </>
  );
};


export default Admin;
