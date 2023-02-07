import React from "react";
import ErrorTemplate from "../templates/ErrorTemplate";
import PageNotFoundImage from "../../assets/images/pose5.png";
import Tree from "../../assets/images/Tree.png";

const BadRequest = () => {
  return (
    <ErrorTemplate
      statusCode={404}
      message="Page Not Found ⚠️"
      description="we couldn't find the page you are looking for"
      src={PageNotFoundImage}
      image={Tree}
    />
  );
};

export default BadRequest;
