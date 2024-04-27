import "./notFound.css";
import Page404 from "../../assets/images/404.png";
const NotFound = () => {
  return (
    <div className="notFound">
      <img src={Page404} alt="404" />
    </div>
  );
};

export default NotFound;
