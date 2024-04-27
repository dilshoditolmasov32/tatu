import "./Footer.css";
import logo from "../../assets/images/logo-footer.svg";
import addres from "../../assets/images/lokatsiya.svg";
import email from "../../assets/images/email.svg";
import phone from "../../assets/images/phone.svg";
import telegram from "../../assets/images/telegram.png";

const Footer = () => {
  const footerData = [
    {
      id: 1,
      category: "Company",
      category_liks: [
        "About Us",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Conditions",
        "contact Us",
        "Support Center",
      ],
    },

    {
      id: 2,
      category: "Category",
      category_liks: [
        "Dairy & Bakery",
        "Fruits & Vegetable",
        "Snack & Spice",
        "Juice & Drinks",
        "Chicken & Meat",
        "Fast Food",
      ],
    },
  ];

  let link = footerData?.map((ele) => (
    <div className="page__footer__link" key={ele.id}>
      <h4>{ele.category}</h4>
      {ele.category_liks?.map((value, index) => (
        <div key={index}>
          <a href="#link">{value}</a>
        </div>
      ))}
    </div>
  ));

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-page">
          <div className="footer-page-group1">
            <img src={logo} alt="logo" id="footer__logo" />
            <p className="group-text">
              FoodTrove is the biggest market of grocery products. <br /> Get
              your daily needs from our store.
            </p>
            <div className="addres">
              <img src={addres} alt="adress" id="addres" />
              51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.{" "}
            </div>
            <div className="email">
              <img src={email} alt="email" className="emailImg" />
              example@email.com
            </div>
            <div className="phone">
              <img src={phone} alt="phone" />
              +91 123 4567890
            </div>
          </div>
          <div className="page__footer">{link}</div>
          <div className="footer-page-group2">
            <h6>Subscribe Our Newsletter</h6>
            <div className="input-search">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search here..."
                required
              />
              <button type="reset">
                <img src={telegram} alt="telegram" />
              </button>
            </div>
            <div className="social-media-links"></div>
          </div>
        </div>

        <h3>
          <i>
            © 2024 <span>FoodTrove</span>, All rights reserved.
          </i>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
