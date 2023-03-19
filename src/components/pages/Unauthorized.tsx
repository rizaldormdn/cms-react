import React from "react";
import ErrorTemplate from "../templates/ErrorTemplate";
import UnauthorizedImage from "../../assets/images/pose9.png";
import Tree2 from "../../assets/static/svgs/Tree2.svg";

const Unauthorized = () => {
  return (
    <ErrorTemplate
      statusCode={401}
      message="You are not authorized! 🔐"
      description="You don’t have permission to access this page. You will be redirect to login in 3 seconds"
      src={UnauthorizedImage}
      image={Tree2}
    />
  );
};

export default Unauthorized;
