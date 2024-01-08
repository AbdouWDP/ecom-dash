import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Swal from "sweetalert2";

function Dashbord() {
  const [products, setProducts] = useState([]);

  function getAllProducts() {
    axios.get("http://localhost:9000/products").then((res) => {
      setProducts(res.data.reverse());
    });
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  function deleteProduct(productId) {
    axios
      .delete("http://localhost:9000/products/" + productId)
      .then(() => {
        getAllProducts();
      })
      .catch((err) => alert(err));
  }

  let allProducts = products.map((product, index) => {
    return (
      <>
        <tr key={product.id}>
          <td> {index + 1} </td>
          <td> {product.title} </td>
          <td> {product.price} </td>
          <td className="operation-btns d-flex gap-1">
            <Link to={"/product/edit/" + product.id}>
              <button className="btn btn-primary btn-sm fw-semibold text-decoration-none text-light">
                Edit
              </button>
            </Link>
            <button
              className="btn btn-danger btn-sm fw-semibold"
              onClick={() => {
                Swal.fire({
                  title: "Do you want to delete this product ?",
                  showDenyButton: true,
                  confirmButtonText: "Yes",
                  denyButtonText: `No`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    deleteProduct(product.id);
                    Swal.fire({
                      title: "Product deleted!",
                      text: "Product has been deleted successfuly.",
                      icon: "success",
                      timer: "3000",
                      allowEnterKey: true,
                    });
                  }
                });
              }}
            >
              Delete
            </button>
            <Link to="/product" className="text-light text-decoration-none">
              <button className="btn btn-success btn-sm">View</button>
            </Link>
          </td>
        </tr>
        <Outlet />
      </>
    );
  });

  return (
    <>
      <div className="w-100">
        <Link to="/product/add">
          <button className="btn btn-success m-2">Add Products</button>
        </Link>
        <table className="dashbord-table table table-striped align-self-start">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>{allProducts}</tbody>
        </table>
      </div>
    </>
  );
}

export default Dashbord;
