import React from "react";
import ErrorTemplate from "../templates/ErrorTemplate";
import PagNotFoundImage from "../../assets/images/pose5.png";
import Tree from "../../assets/static/svgs/Tree.svg";

const BadRequest = () => {
  return (
    <ErrorTemplate
      statusCode={404}
      message="Page Not Found ⚠️"
      description="we couldn't find the page you are looking for"
      src={PagNotFoundImage}
      image={Tree}
    />
  );
};

export default BadRequest;
