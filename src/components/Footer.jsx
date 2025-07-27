import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark  mt-3  text-light py-4 ">
      <div className="container text-center">
        <h5 className="mb-2">Eventickets</h5>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Eventickets. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
