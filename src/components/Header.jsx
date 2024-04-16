import logo from "../assets/logo.svg";
import girlDesktop from "../assets/hero-desktop.jpg";
import girl from "../assets/hero-mobile.jpg";
import { Form } from "../components/Form";
import "./Header.css";

export const Header = () => {
  return (
    <div className="main-container">
      <img className="logo" src={logo} alt="logo" />
      <img className="girlDesktop" src={girlDesktop} alt="logo" />
      <img className="girl" src={girl} alt="girl" />
      <Form className="form-position" />
    </div>
  );
};
