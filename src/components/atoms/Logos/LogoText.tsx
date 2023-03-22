type Props = {
  text?: string;
};

const LogoText = (props: Props) => {
  return (
    <h3 className=" text-[24px] font-medium leading-[20px]">{props.text ? props.text : "Sekolah alam pangrango" }</h3>
  );
};

export default LogoText;
