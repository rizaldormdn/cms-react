import React from "react";
import ErrorTemplate from "../templates/ErrorTemplate";
import UnauthorizedImage from "../../assets/images/pose9.png";
import Tree2 from "../../assets/images/Tree2.png";

const Unauthorized = () => {
  return (
    <ErrorTemplate
      statusCode={401}
      message="You are not authorized! 🔐"
      description="You don’t have permission to access this page. Go Home!"
      src={UnauthorizedImage}
      image={Tree2}
    />
  );
};

export default Unauthorized;
