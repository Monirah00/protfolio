import React from "react";
import { FaFacebook,FaPhoneAlt,FaFax,FaEnvelope} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section className="Footer-bg">
        <div className="row text-white">
          <div className="col-lg-6 col-12 text-center">
          <p>&copy; Copyright Nerob Ahamed</p>
          </div>
          <div className="col-lg-6 col-12 text-center">
              <div className="Icons">
              <p className='Icons-style'><FaFacebook /></p>
              <p className='Icons-style'><FaPhoneAlt /></p>
              <p className='Icons-style'><FaFax /></p>
              <p className='Icons-style'><FaEnvelope /></p>

              </div>
             
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
