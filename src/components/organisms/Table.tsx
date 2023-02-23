import React from "react";
import TableBody, { Authors } from "../molecules/table/TableBody";
import TableHead from "../molecules/table/TableHead";

type Props = {
  items: Authors;
};

const Table = (props: Props) => {
  return (
    <table className="table-auto w-full my-2">
      <TableHead />
      <TableBody authors={props.items} />
    </table>
  );
};

export default Table;
