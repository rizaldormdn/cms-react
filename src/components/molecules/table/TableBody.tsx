import DataCell from "../../atoms/table/DataCell";
import icon from "../../../assets/icons/threedotted.png";

type Author = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  date: string;
};

export type Authors = Author[];

type Props = {
  authors: Authors;
};

const TableBody = (props: Props) => {
  return (
    <tbody>
      {props.authors !== undefined &&
        props.authors.map((author: Author) => (
          <tr>
            <DataCell value={<input type="checkbox" />} />
            <DataCell value={author.firstName} />
            <DataCell value={author.lastName} />
            <DataCell value={author.email} />
            <DataCell value={author.role} />
            <DataCell value={author.date} />
            <DataCell
              value={
                <figure className="w-full flex justify-center">
                  <img width={5} src={icon} alt="icon" />
                </figure>
              }
            />
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
