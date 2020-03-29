import React from "react";

const GoogleAnalytics = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', '${process.env.GOOGLE_ANALYTICS}');
        `
      }}
    />
  </>
);

export { GoogleAnalytics };
