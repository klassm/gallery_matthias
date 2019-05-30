import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa500px, faInstagram, faTwitter, faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'

interface FooterIconProps {
  icon: IconDefinition,
  link: string
}

function FooterIcon(props: FooterIconProps) {
  return <a className="footerIcon" href={props.link} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={props.icon}/>
  </a>
}

export default function Footer() {
  return <div className="footer">
    <div>
      <FooterIcon icon={fa500px} link="https://500px.com/Klassm"/>
      <FooterIcon icon={faInstagram} link="http://instagram.com/klassm"/>
      <FooterIcon icon={faTwitter} link="https://twitter.com/klassm"/>
      <FooterIcon icon={faGithub} link="https://github.com/klassm"/>
    </div>
    <div className="author">
      Matthias Klaß &#9702; photos.klass.li
    </div>
  </div>;
}