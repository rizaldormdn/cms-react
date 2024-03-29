import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import Footer from "../molecules/Footer";
import { Authors as AuthorsType } from "../molecules/table/TableBody";
import PrimaryNavbar from "../organisms/PrimaryNavbar";
import Sidebar from "../organisms/Sidebar";
import Table from "../organisms/Table";

import { authorData } from "../lib/AuthorData";
import { useNavigate } from "react-router-dom";

type Props = {};

const AuthorTemplate = (props: Props) => {
  const [authors, setAuthors] = useState<AuthorsType>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setAuthors(authorData);
  }, []);

  {
    /* 

  const getAuthor = () =>
  axios
  .get("url")
  .then(({ data }) => {
      setAuthors(data.authors);
    })
    .catch((error) => {
        console.error(error);
    });
    
    useEffect(() => {
        getAuthor();
    }, []);

    */
  }

  return (
    <div className="flex flex-row-reverse min-h-screen w-full">
      <div className="flex flex-col justify-between w-full">
        <Container>
          <div className=" flex justify-end">
            <Button
              action={(e) => {
                navigate("/create-author");
              }}
              title="Create Author"
            />
          </div>
          <div className="flex justify-center">
            <Table items={authors} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AuthorTemplate;
