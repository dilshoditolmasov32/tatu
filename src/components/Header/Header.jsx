import "./Header.css";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user.svg";
import like from "../../assets/images/like.svg";
import cart from "../../assets/images/cart.svg";
import search from "../../assets/images/search.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-page">
      <div className="container">
        <nav className="header-section">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="input-search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search For items..."
            />
            <select name="select" id="select">
              <option value="categories">All Categories</option>
            </select>
            <button className="btn__search">
              <img src={search} alt="search" />
            </button>
          </div>
          <div className="more__links">
            <div>
              <Link to={"/login"}>
                <img src={user} alt="user" /> Account
              </Link>
            </div>
            <div>
              <Link>
                <img src={like} alt="like" /> Wishlist
              </Link>
            </div>
            <div>
              <Link>
                <img src={cart} alt="cart" />
                Cart
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
