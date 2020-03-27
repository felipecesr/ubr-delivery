import React from 'react';

const ContactButton = ({ link, icon, text }) => (
  <li className="contact-list__button">
    <a href={link}>
      <svg className="icon">
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={`icons.svg#${icon}`}
        />
      </svg>
      <span>{text}</span>
    </a>
  </li>
);

export { ContactButton };
