import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row mb-48 mt-48 justify-center">
      <div className="font:Inter text-5xl ml-a mb-46 ">
        <h1>
          Let’s work together on <br />
          your next product.
        </h1>
      </div>
      <div className="flex flex-initial ml-16 font-Inter font-medium">
        <nav>
          <a
            href="https://github.com/STPekdemir"
            className=" text-[#1769FF] block mb-2 "
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/selahattin-tolga-pekdemir-63b585218/"
            className="text-[#0077B5] block mb-2 "
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/stpbey/"
            className="text-black block mb-2 "
          >
            İnstagram
          </a>
          <a
            className="text-[#AF0C48] block mb-2 "
            href="mailto:pekdemirtolga@outlook.com"
          >
            Email
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
