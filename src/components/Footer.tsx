import React from "react";
import logo from "../images/logo-bookmark-footer.svg";
import { ReactComponent as TwitterIcon } from "../images/icon-twitter.svg";
import { ReactComponent as FacebookIcon } from "../images/icon-facebook.svg";


export default function Footer() {
  return (
    <div className="bg-very-dark-blue text-center py-12 md:flex md:justify-between md:items-center md:px-24">
      <div className="md:flex md:items-center">
        <img
          src={logo}
          alt="bookmark logo"
          className="mx-auto mb-10 md:mb-0 cursor-pointer md:mr-8"
        />
        <ul className="text-white [&>*]:mb-4 [&>*]:block md:[&>*]:mb-0 [&>*]:cursor-pointer tracking-widest md:flex md:[&>*]:mx-8">
          <a href='/#features' className="hover:text-soft-red">FEATURES</a>
          <a href='/#download' className="hover:text-soft-red">DOWNLOAD</a>
          <a href='/#contact' className="hover:text-soft-red">CONTACT</a>
        </ul>
      </div>

      <div className="flex justify-center items-center mt-10 md:mt-0 [&>*]:mx-5 [&>*]:cursor-pointer">
        <FacebookIcon className="fill-white hover:fill-soft-red"/>
        <TwitterIcon className="fill-white hover:fill-soft-red"/>
      </div>
    </div>
  );
}
