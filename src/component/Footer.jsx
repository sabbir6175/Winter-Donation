import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
    return (
      <footer className="bg-lime-100 text-white pt-8 pb-3">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3 justify-between">
        
        <div className="flex-1 min-w-[250px] text-black ">
          <h4 className="text-lg font-semibold mb-10">Contact Us</h4>
          <p className="mb-2 flex items-center gap-3"><FaPhone></FaPhone> Phone: (123) 456-7890</p>
          <p className="mb-2 flex items-center gap-3"><AiOutlineMail></AiOutlineMail> Email: contact@example.com</p>
          <p className="mb-2 flex items-center gap-3"><FaLocationDot></FaLocationDot> Address: 123 Street Name, Rangpur, Bangladesh</p>
        </div>
        <div className="flex-1 min-w-[250px] text-center text-black">
          <h4 className="text-lg font-semibold mb-10">Follow Us</h4>
          <div className="flex justify-center gap-6">
            <a href="https://www.facebook.com/" className=" hover:text-blue-600 transition duration-300" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://twitter.com" className=" hover:text-blue-400 transition duration-300" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/feed/" className=" hover:text-blue-700 transition duration-300" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="https://www.instagram.com/sabbir01661/" className=" hover:text-pink-600 transition duration-300" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>
        <div className="flex-1 min-w-[250px] text-center my-4 text-black">
          <p className="text-sm">@2024 Your Donation Campaigns . All Rights Reserved By  <span className='text-red-400'>Sabbir Hasan</span> </p>
        </div>
      </footer>
    );
};

export default Footer;