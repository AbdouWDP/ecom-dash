import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddProductFrom() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  let navigation = useNavigate();

  function postProduct(e) {
    e.preventDefault();

    let params = {
      title: title,
      price: price,
    };
    if (isNaN(price)) {
      alert("Price input must be contain numbers only");
    } else if (title !== "" && price != "") {
      axios.post("http://localhost:9000/products", params).then(() =>
        Swal.fire(
          "Product Added!",
          "Product has been created successfuly.",
          "success"
        ).then(() => {
          navigation("/");
        })
      );
    } else {
      alert("Title field and price field must filled");
    }
  }

  return (
    <>
      <h1 className="text-center">Add New Product</h1>
      <Link to="/">
        <button
          type="button"
          class="btn-close position-absolute"
          style={{ top: "70px", right: "30px" }}
          aria-label="Close"
        ></button>
      </Link>
      <div>
        <form
          id="add-product-form"
          className="d-flex flex-column gap-2 align-items-center mx-auto mt-4 p-2"
          style={{ width: "400px" }}
        >
          <input
            type="text"
            placeholder="Product Name"
            className="w-100"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Product Price"
            className="w-100"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary w-100"
            onClick={(e) => postProduct(e)}
          />
        </form>
      </div>
    </>
  );
}

export default AddProductFrom;
