import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { x, facebook, instagram, tiktok } from '../../config/cloudinary';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Redes sociales */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-lime-400 mb-2">Seguinos en nuestras redes</h2>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.instagram.com/ulbakuya/" target="_blank" rel="noreferrer">
              <AdvancedImage cldImg={instagram} className="w-10 h-10 rounded-lg transition transform hover:-translate-y-1 hover:scale-110 duration-300" />
            </a>
            <a href="https://www.facebook.com/ulbakuya?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
              <AdvancedImage cldImg={facebook} className="w-10 h-10 rounded-lg transition transform hover:-translate-y-1 hover:scale-110 duration-300" />
            </a>
            <a href="http://localhost:5173/#/proximamente">
              <AdvancedImage cldImg={tiktok} className="w-10 h-10 rounded-lg transition transform hover:-translate-y-1 hover:scale-110 duration-300" />
            </a>
            <a href="http://localhost:5173/#/proximamente">
              <AdvancedImage cldImg={x} className="w-10 h-10 rounded-lg transition transform hover:-translate-y-1 hover:scale-110 duration-300" />
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div className="text-center md:text-right">
          <h2 className="text-lg font-semibold text-lime-400 mb-1">Escribinos a</h2>
          <p className="text-md font-normal">ulbakuya@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
