import React from "react";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { Hotjar } from "./Hotjar";

const ScriptTags = () => (
  <>
    <GoogleAnalytics />
    <Hotjar />
  </>
);

export { ScriptTags };
