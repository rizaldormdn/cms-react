type Props = {
  value: string | number | JSX.Element;
};

export default function DataCell(props: Props) {
  return <td className="py-2 text-center">{props.value}</td>;
}
