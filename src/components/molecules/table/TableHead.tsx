import HeaderCell from "../../atoms/table/HeaderCell";

export default function TableHead() {
  return (
    <thead className="bg-[#D9D9D9]">
      <tr>
        <HeaderCell value={<input type="checkbox" />} />
        <HeaderCell value="Fistname" />
        <HeaderCell value="Lastname" />
        <HeaderCell value="Email" />
        <HeaderCell value="Role" />
        <HeaderCell value="Date" />
        <HeaderCell value="Action" />
      </tr>
    </thead>
  );
}
