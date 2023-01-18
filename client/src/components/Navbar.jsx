import React from "react";
import { Link } from "react-router-dom";
import './style.css'
const Navbar = () => {
  return (
    <div className="navb">
      <div className="navbLeft">
        <img
          src="https://media3.giphy.com/media/hr9qlQ2hcg2VZT6qWp/giphy.gif?cid=790b76110d0bc2dc1bc0874d2fb16a59d804aa3c0ef28b6d&rid=giphy.gif&ct=g"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="navbRight">
      <ul>
      <li>
      {" "}
      <Link className=" aa Links" to="/books">
       Books
      </Link>
    </li>
          <li>  {" "}
          <Link className=" aa Links" to="/authors">
          Authors
          </Link>
          </li>
          <li>  {" "}
          <Link className=" aa Links" to="/addnew">
          Add New Book
          </Link>
          </li>
        
      </ul></div>
    </div>
  );
};

export default Navbar;
