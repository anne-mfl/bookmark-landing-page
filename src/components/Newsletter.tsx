import { useState } from "react";
import { Button } from "../atoms/button";
import { Description } from "../atoms/description";
import { Header } from "../atoms/header";
import errorIcon from "../images/icon-error.svg";

export default function Newsletter() {

  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log("submit hitted");
    if (!email.match(validEmail)) {
      setMessage("Whoops, make sure it's an email");
      setTimeout(() => setMessage(""), 2500);
    }
  };

  return (
    <div className="text-center bg-soft-blue px-6 py-16" id='contact'>
      <Description
        addClassName={"text-white text-sm mb-3 tracking-custom-wide md:mb-8"}
      >
        35,00+ ALREADY JOINED
      </Description>
      <Header addClassName={"text-white lg:w-3/12 lg:mx-auto"}>
        Stay up-to-date with what we're doing
      </Header>

      <form onSubmit={handleSubmit}
      className={`md:flex ${!message && 'md:items-center'} md:w-6/12 md:mx-auto md:mt-12`}
      >
        <div
          className={`md:basis-8/12
            ${message && 'bg-soft-red mt-4 mb-5 pb-1 pt-1 px-1 rounded relative'}
          `}
        >
          <input
            type="string"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            className={`rounded py-3 px-5 w-full outline-none placeholder:opacity-50 ${
              !message && "mt-4 mb-5"
            }`}
          />
          {message && (
            <>
              <img
                src={errorIcon}
                alt="error icon"
                className="absolute -mt-9 right-4"
              />
              <p className="text-white italic text-sm text-left pl-3 pt-1">
                {message}
              </p>
            </>
          )}
        </div>
        <Button
          bgcolor={"bg-soft-red hover:bg-white"}
          textcolor={"text-white hover:text-soft-red"}
          width={`w-full md:basis-4/12 h-12 md:ml-5 hover:border-2 hover:border-soft-red ${!message ? 'md:-mt-1' : 'md:mt-4'}`}
        >
          Contact Us
        </Button>
      </form>
    </div>
  );
}
