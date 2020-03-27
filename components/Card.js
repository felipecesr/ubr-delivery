import React from 'react';
import { ContactButton } from './ContactButton';

const Card = ({ name, phone, whatsapp }) => (
  <article className="card">
    <h2 className="card__title">{name}</h2>
    <ul className="contact-list">
      <ContactButton link={`tel:${phone}`} icon="phone" text="Celular" />
      {whatsapp && (
        <ContactButton
          link={`https://api.whatsapp.com/send?phone=${whatsapp}`}
          icon="whatsapp"
          text="Whatsapp"
        />
      )}
    </ul>
  </article>
);

export { Card };
