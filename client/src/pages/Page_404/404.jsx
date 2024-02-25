import React from 'react';
import img404 from '../../assets/images/img404.png';
import '../Login/login.css';

const NotFoundPage = () => {
  return (
    <section className="container_img_form">
      <div className="container_img">
        <img src={img404} alt="Imagem 404" />
      </div>

      <section className="container_login_form">
        <h1>404 - Page Not Found</h1>
      </section>
    </section>
  );
};

export default NotFoundPage;
