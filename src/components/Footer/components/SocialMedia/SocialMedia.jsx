import React from "react";
// import { Link } from "react-router-dom";
import "./SocialMedia.css";

const socialMediaURL = {
  twitter: "https://twitter.com/DiegoParreira5",
  facebook: "https://www.facebook.com/diego.parreira.5",
  instagram: "https://www.instagram.com/diegoparreira_/",
  github: "https://www.github.com/diegoparreira"
}

const SocialMediaItem = ({className, icon, url}) => {
  return (
    <li className={className}>
      <a href={url} className="social__item__link">
        <i className={icon} aria-hidden="true"></i>
      </a>
    </li>
  )
}

const SocialMedia = () => {
  return (
    <ul className="footer__social">
      <SocialMediaItem className="social__item twitter" icon="fa fa-twitter" url={socialMediaURL.twitter}/>
      <SocialMediaItem className="social__item facebook" icon="fa fa-facebook-official" url={socialMediaURL.facebook}/>
      <SocialMediaItem className="social__item instagram" icon="fa fa-instagram" url={socialMediaURL.instagram}/>
      <SocialMediaItem className="social__item github" icon="fa fa-github" url={socialMediaURL.github}/>
    </ul>
  );
};

export default SocialMedia;
