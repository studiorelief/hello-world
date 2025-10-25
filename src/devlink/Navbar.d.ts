import * as React from "react";
import * as Types from "./types";

declare function Navbar(props: {
  as?: React.ElementType;
  navbarLinkFeatures?: React.ReactNode;
  navbarLinkProducts?: React.ReactNode;
  navbarLinkResources?: React.ReactNode;
  navbarLinkContact?: React.ReactNode;
  navbarLinkHello?: React.ReactNode;
  buttonTextGetStarted?: React.ReactNode;
}): React.JSX.Element;
