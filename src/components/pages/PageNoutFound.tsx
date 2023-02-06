import React from "react";
import ErrorPNF from "../templates/ErrorPNF";

export const PageNotFound = () => {
  return <ErrorPNF statusCode={404} />;
};
