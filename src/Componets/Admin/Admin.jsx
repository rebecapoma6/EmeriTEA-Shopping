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
  // const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
    Name_product: "",
    Id_Category: "",
    Price: "",
    image: "",
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
      image: "",
      Description: "",
      stock: "",
      Size: [],
      showSize: false,
    });
  };
  // const logout = () => {
  //   document.cookie = 'jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  //   // Redirigir al usuario a la vista de inicio
  //   navigate('/');
  //   // Otras acciones de limpieza de sesión si las hay
  // };
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://localhost:7032/Product/GetProducts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

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
      if (name === "Size") {
        return {
          ...prevProduct,
          [name]: value,
        };
      }

      let updatedProduct = {
        ...prevProduct,
        [name]: value,
      };

      if (name === "Id_Category") {
        updatedProduct.showSize = value === "2";
        if (value === "1") {
          updatedProduct.Size = [];
        }
      }

      return updatedProduct;
    });
  };

  useEffect(() => {
    setNewProduct((prevProduct) => {
      let updatedProduct = {
        ...prevProduct,
        showSize: prevProduct.id_Category === "2",
      };

      if (!updatedProduct.showSize) {
        updatedProduct.size = [];
      }

      return updatedProduct;
    });
  }, [newProduct.id_Category]);

  const addProduct = () => {
    const token = getCookie("jwtToken");
    if (!token) {
      console.error("Token no válido o no presente");
      return;
    }
    const productData = {
      Name_product: newProduct.Name_product,
      Id_Category: newProduct.Id_Category,
      Price: newProduct.Price,
      Image: newProduct.image,
      Description: newProduct.Description,
      stock: newProduct.stock,
      Size: newProduct.Size,
    };

    fetch(`https://localhost:7032/Product/AddProductWithSizes`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
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
        fetchProducts();
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire("Error", "Failed to add product", "error");
      });
  };

  const deleteProduct = (id) => {
    const token = getCookie("jwtToken");
    if (!token) {
      console.error("Token no válido o no presente");
      return;
    }
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
        fetch(`https://localhost:7032/Product/Delete/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(() => {
            const updatedProducts = products.filter(
              (product) => product.id_Product !== id
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
    if (product && product.id_Product) {
      setIsEditModalOpen(true);
      let productDetails = { ...product };
      setShowEditSize(productDetails.id_Category === 2);
      setSelectedProductDetails(productDetails);
    } else {
      console.error(
        "Error: No se puede abrir el modal de edición, falta el ID del producto."
      );
    }
  };

  const editProduct = () => {
    const token = getCookie("jwtToken");
    if (!token) {
      console.error("Token no válido o no presente");
      return;
    }
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
          Name_product: selectedProductDetails.name_product,
          Id_Category: selectedProductDetails.id_Category,
          Price: selectedProductDetails.price,
          Image: selectedProductDetails.image,
          Description: selectedProductDetails.description,
          stock: selectedProductDetails.stock,
          Size:
            selectedProductDetails.id_Category === "1"
              ? []
              : selectedProductDetails.size,
        };

        fetch(
          `https://localhost:7032/Product/Put/${selectedProductDetails.id_Product}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editedProductData),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to edit the product");
            }
            closeEditModal();
            setProducts((prevProducts) =>
              prevProducts.map((product) =>
                product.id_Product === selectedProductDetails.id_Product
                  ? { ...product, ...editedProductData }
                  : product
              )
            );
            Swal.fire("Éxito", "Producto editado con éxito", "success");
            fetchProducts();
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Error", "No se ha podido editar el producto", "error");
          });
      }
    });
  };

  function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let c = cookieArray[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  return (
    <>
      <div className="add-header">
        <h1>AÑADIR PRODUCTOS</h1>
      </div>

      {/* <Link to="/"> */}
      {/* <button onClick={logout}>
            Cerrar Sesión
      </button> */}
      {/* </Link> */}

      <br />
      <Button className="modal-header" onClick={openAddModal}>
        Agregar Producto
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
              Agregar Producto
            </ModalHeader>

            <ModalBody>
              <form className="add-2">
                <label htmlFor="productName">Nombre:</label>
                <input
                  type="text"
                  value={newProduct.name_product}
                  onChange={(e) =>
                    handleInputChange("Name_product", e.target.value)
                  }
                />

                <label htmlFor="productId_Category">Categoría:</label>
                <select
                  value={newProduct.id_Category}
                  onChange={(e) => {
                    handleInputChange("Id_Category", e.target.value);
                    if (e.target.value === 1) {
                      handleInputChange(1, e.target.value);
                    } else {
                      handleInputChange(2, e.target.value);
                    }
                  }}
                >
                  <option value="">Seleccionar una categoría</option>
                  <option value="1">Accesorio</option>
                  <option value="2">Prenda</option>
                </select>
                <br />

                {newProduct.showSize && (
                  <>
                    <label htmlFor="productSize">Talla:</label>
                    <select
                      value={newProduct.size}
                      onChange={(e) => {
                        const selectedOptions = Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        );
                        handleInputChange("Size", selectedOptions);
                      }}
                      multiple
                    >
                      
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option value="XXXL">XXXL</option>
                    </select>
                    {/* <div>
                      {newProduct.Size.map((size) => (
                        <span key={size}>{size}</span>
                      ))}
                    </div> */}
                  </>
                )}

                <label htmlFor="productPrice">Precio:</label>
                <input
                  type="text"
                  value={newProduct.price}
                  onChange={(e) => handleInputChange("Price", e.target.value)}
                />
                <br></br>

                <label className="product-Image" htmlFor="productImage">
                  Image URL:
                </label>
                <input
                  type="text"
                  value={newProduct.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                />

                {newProduct.image && (
                  <img
                    src={newProduct.image}
                    alt="Product Image"
                    className="product-Image"
                  />
                )}

                <br></br>

                <label htmlFor="productDescription">Descripción:</label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) =>
                    handleInputChange("Description", e.target.value)
                  }
                ></textarea>

                <br></br>

                <label htmlFor="productStock">Stock:</label>
                <input
                  type="text"
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
            key={product.id_Product}
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
          <ModalContent className="add-form formSection">
            <>
              <ModalHeader>Editar Producto</ModalHeader>

              <ModalBody>
                <form>
                  <label htmlFor="productName">Nombre:</label>

                  <input
                    type="text"
                    value={selectedProductDetails.name_product}
                    onChange={(e) =>
                      setSelectedProductDetails({
                        ...selectedProductDetails,
                        name_product: e.target.value,
                      })
                    }
                  />

                  <label htmlFor="productCategory">Categoría:</label>
                  <select
                    value={selectedProductDetails.id_Category}
                    onChange={(e) => {
                      const newCategoryId = e.target.value;
                      setSelectedProductDetails({
                        ...selectedProductDetails,
                        id_Category: newCategoryId,
                      });
                      setShowEditSize(newCategoryId === "2");
                    }}
                  >
                    <option value="">Seleccionar una categoría</option>
                    <option value="1">Accesorio</option>
                    <option value="2">Prenda</option>
                  </select>

                  <br />
                  <br />

                  <label htmlFor="productSizeDetails">Talla:</label>
                  {showEditSize && (
                    <select
                      multiple
                      value={selectedProductDetails.size || []}
                      onChange={(e) =>
                        setSelectedProductDetails({
                          ...selectedProductDetails,
                          size: Array.from(
                            e.target.selectedOptions,
                            (option) => option.value
                          ),
                        })
                      }
                    >
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option value="XXXL">XXXL</option>
                    </select>
                  )}

                  <br />
                  <br />
                  <label htmlFor="productPrice">Precio:</label>

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

                  <label htmlFor="productDescription">Descripción:</label>
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
