import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-primary w-100 text-light" style={{ height: "60px" }}>
      <nav className="d-flex justify-content-between align-items-center w-100 h-100 px-4">
        <Link to="/" className="text-decoration-none text-light">
          <h1>Navbar</h1>
        </Link>
        <ol className="order-list p-0 m-0 d-flex gap-4">
          <Link to="/" className="text-decoration-none text-light">
            <li>Home</li>
          </Link>
          <Link to="/shop" className="text-decoration-none text-light">
            <li>Shop</li>
          </Link>
        </ol>
      </nav>
    </div>
  );
}

export default Navbar;
