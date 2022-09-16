import { useState, useEffect } from "react";
import logo from "../images/logo-bookmark.svg";
import logoMenuOpen from "../images/logo-bookmark-menu-open.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import twitterIcon from "../images/icon-twitter.svg";
import facebookIcon from "../images/icon-facebook.svg";
import { Button } from "../atoms/button";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    openMenu
      ? document.body.classList.add("overflow--hidden")
      : document.body.classList.remove("overflow--hidden");
  }, [openMenu]);

  return (
    <>
      <div
        className={`
        md:py-8 md:px-24
        ${
          openMenu
            ? "bg-very-dark-blue opacity-95 h-screen overflow-hidden"
            : "bg-white"
        }
      `}
      >
        <div className="flex items-center justify-between py-6 px-6">
          <img src={openMenu ? logoMenuOpen : logo} alt="bookmark logo" />
          <img
            src={openMenu ? close : hamburger}
            alt="hamburger icon"
            onClick={() => setOpenMenu(!openMenu)}
            className={`cursor-pointer md:hidden ${openMenu && 'mr-4'}`}
          />
          <div className="hidden md:flex md:justify-between md:items-center">
            <ul className="[&>*]:text-very-dark-blue [&>*]:mx-6 mr-3">
              <a href='/#features' className="hover:text-soft-red" >FEATURES</a>
              <a href='/#download' className="hover:text-soft-red">DOWNLOAD</a>
              <a href='/#contact' className="hover:text-soft-red">CONTACT</a>
            </ul>
            <Button bgcolor={'bg-soft-red hover:bg-white'} textcolor={'text-white hover:text-soft-red'} width={'px-12 border-2 border-soft-red'}>LOGIN</Button>
          </div>
        </div>

        {openMenu && (
          <div>
            <ul className="text-white text-xl px-6 flex flex-col">
              <a href="/#features" className="text-center border-t py-4 mt-6" onClick={()=>setOpenMenu(false)}>
                FEATURES
              </a>
              <a href="/#download" className="text-center border-t py-4" onClick={()=>setOpenMenu(false)}>
                DOWNLOAD
              </a>
              <a href="/#contact" className="text-center border-y py-4" onClick={()=>setOpenMenu(false)}>
                CONTACT
              </a>
              <button className="my-6 border-2 py-2 rounded-md">LOGIN</button>
            </ul>
            <div className="flex justify-center py-12">
              <img src={facebookIcon} alt="facebook icon" className="mx-5" />
              <img src={twitterIcon} alt="twitter icon" className="mx-5" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
