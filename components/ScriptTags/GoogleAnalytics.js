import React from 'react';

const GoogleAnalytics = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-65777050-2"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', 'UA-65777050-2');
        `
      }}
    />
  </>
);

export { GoogleAnalytics };
