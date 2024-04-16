import React, { useState } from "react";
import wrong from "../assets/icon-error.svg";
import arrow from "../assets/icon-arrow.svg";
import "./Form.css";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(true);

  const validarCorreo = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleInputChange = (event) => {
    const nuevoEmail = event.target.value;
    setEmail(nuevoEmail);
    setEmailValido(validarCorreo(nuevoEmail));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailValido) {
      console.log("El correo electrónico es válido:", email);
      setEmail("");
      setEmailValido(true);
    } else {
      console.log("Correo electrónico inválido");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="title-container">
        <span className="rose-color">WE'RE</span>
        <span className="black-color">COMING SOON</span>
      </div>
      <p>
        Hello fellow shoppers! We're currently building our new fashion store. Add your
        email below to stay up-to-date with announcements and our launch deals.
      </p>
      <div className="input-container">
        <input
          className={!emailValido && "inputRed"}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleInputChange}
        />
        {!emailValido && <img className="wrong" src={wrong} alt="wrong" />}
        <button type="submit" className="arrow">
          <img src={arrow} alt="arrow" />
        </button>
        {!emailValido && <span className="alert-span">Please provide a valid email</span>}
      </div>
    </form>
  );
};
