import React from "react";

interface AppButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  classname?: any;
  data_bs_toggle?: string;
  data_bs_target?: string;
  data_bs_dismiss?: string;
  iconleftside?: any;
  iconrightside?: any;
  label?: string;
  fafaiconleft?:any;
  onClick?: (e: any) => void;
  style?: React.CSSProperties;
}

const ButtonField = ({
  type,
  label,
  data_bs_dismiss,
  data_bs_target,
  data_bs_toggle,
  onClick,
  iconleftside,
  fafaiconleft,
  iconrightside,
  classname,
  style,
}: AppButtonProps) => {
  return (
    <button
      data-bs-toggle={data_bs_toggle}
      data-bs-dismiss={data_bs_dismiss}
      data-bs-target={data_bs_target}
      type={type}
      className={`commonStyle ${classname}`}
      onClick={onClick}
      style={style}
    >
      {fafaiconleft&&<a className="fa fa-download" style={{color:"white"}}></a>}
      {iconleftside} {label} {iconrightside}{" "}
    </button>
    
  );
};

export default ButtonField;
