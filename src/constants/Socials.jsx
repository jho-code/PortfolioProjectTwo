import React from "react";

// impor icons
import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImLinkedin,
  ImYoutube,
} from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden lg:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a
            href="https://www.facebook.com/jhosgenner/"
            target="_blank"
            className="hover:text-tertiary ease-in-out duration-300 transition-colors"
          >
            <ImFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/jhosgenner/"
            target="_blank"
            className="hover:text-tertiary ease-in-out duration-300 transition-colors"
          >
            <ImInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/jhosgenner"
            target="_blank"
            className="hover:text-tertiary ease-in-out duration-300 transition-colors"
          >
            <ImTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jhosgenner/"
            target="_blank"
            className="hover:text-tertiary ease-in-out duration-300 transition-colors"
          >
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@jhosgenner"
            target="_blank"
            className="hover:text-tertiary ease-in-out duration-300 transition-colors"
          >
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
