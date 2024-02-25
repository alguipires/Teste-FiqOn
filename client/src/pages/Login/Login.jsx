import React from 'react';
import Form from '../../components/Form/FormLogin';
import imageLogin from '../../assets/images/img_login_fiqon.svg';
import './login.css';

const login = () => {
  return (
    <section className="container_img_form">
      <div className="container_img">
        <img src={imageLogin} alt="Imagem do login" />
      </div>

      <section className="container_login_form">
        <h1>Entre no teste técnico FiqOn</h1>

        <div className="container_form">
          <p>Faça login</p>

          <Form />
        </div>
      </section>
    </section>
  );
};

export default login;
