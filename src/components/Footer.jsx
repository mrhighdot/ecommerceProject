import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Footer.css";
import { pageLinks } from "../constants/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="grid md:grid-cols-2 lg:grid-cols-3 bg-gray-200 w-full py-14 px-12">
      {/* Newsletter */}
      <section>
        <h3 className="text-3xl mb-4">Let's get in touch</h3>
        <div className="flex flex-col gap-3">
          <label htmlFor="newsletter" className="">
            Sign up for our newsletter and receive 10% off your purchase
          </label>
          <div className="flex items-center py-2 px-4 w-[60%] gap-2 border border-gray-200 justify-between bg-white">
            <span>
              <IoMdMail />
            </span>
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-none w-full focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </section>
      {/* Links */}
      <section className="flex flex-col justify-between">
        <span>Quick Links</span>
        {pageLinks.map((link) => {
          return (
            <Link key={link.id} to={link.path} className="text-sm">
              <span>{link.name}</span>
            </Link>
          );
        })}
      </section>
    </footer>
  );
};

export default Footer;
