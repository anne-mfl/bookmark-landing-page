import React from "react";
import { Card } from "../molecules/card";
import { HeaderAndDescription } from "../molecules/header-and-description";
import ChromeLogo from "../images/logo-chrome.svg";
import FirefoxLogo from "../images/logo-firefox.svg";
import OperaLogo from "../images/logo-opera.svg";

export default function Download() {
  return (
    <div className="mt-28 md:mt-40" id='download'>
      <HeaderAndDescription
        header={"Download the extension"}
        description={
          "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize."
        }
      />

      <div className='lg:flex lg:justify-center lg:items-center lg:-mt-20 lg:[&_div:nth-child(2)]:mt-24 lg:[&_div:nth-child(3)]:mt-48'>
        <Card browserName={"Chrome"} minimumVersion={62} image={ChromeLogo} />
        <Card browserName={"Firefox"} minimumVersion={55} image={FirefoxLogo} />
        <Card browserName={"Opera"} minimumVersion={46} image={OperaLogo} />
      </div>
    </div>
  );
}
