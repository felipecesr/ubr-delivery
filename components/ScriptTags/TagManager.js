import React from "react";

// Cole esse código o mais alto possível na tag <head> da página:
const TagManagerHead = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GOOGLE_TAG_MANAGER}');
      `
    }}
  />
);

// Além disso, cole esse código imediatamente após a tag de abertura <body>:
const TagManagerBody = () => (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAG_MANAGER}`}
      height="0"
      width="0"
      style="display:none;visibility:hidden"
    ></iframe>
  </noscript>
);

export { TagManagerHead, TagManagerBody };
