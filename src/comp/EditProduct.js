import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function EditProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:9000/products/" + productId)
      .then((res) => setProduct(res.data));
  }, []);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  function updateProduct(e) {
    e.preventDefault();
    if (isNaN(price)) {
      alert("Price input must be numbers only");
    } else if (title !== "" && price != "") {
      let params = {
        title: title,
        price: Number(price),
      };
      axios
        .put("http://localhost:9000/products/" + productId, params)
        .then(() =>
          Swal.fire(
            "Product Updated!",
            "Product has been updated successfuly.",
            "success"
          )
        );
    }
  }

  return (
    <>
      <h1 className="text-center">Edit Product</h1>
      <div>
        <form
          id="add-product-form"
          className="d-flex flex-column gap-2 align-items-center mx-auto mt-4 p-2"
          style={{ width: "400px", height: "150px" }}
        >
          <input
            type="text"
            placeholder={product.title}
            className="w-100"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder={product.price}
            className="w-100"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="submit"
            value="Edit"
            className="btn btn-primary w-100"
            onClick={(e) => updateProduct(e)}
          />
        </form>
      </div>
    </>
  );
}

export default EditProduct;
