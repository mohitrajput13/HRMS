import React from 'react';

interface InputProps {
  label?:string
  text?:any;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  labelclass?: any;
  classname?: string;
  maindiv?: string;
  readOnly ?:boolean
  id?:string
}

const InputFeild = ({ text,placeholder, value,id, readOnly = false , onChange, labelclass, classname ,label }:InputProps) => {
  return (<>
    <div className='d-flex flex-column maindiv ' >
    <label  className={` ${labelclass}`}>{label}</label>
    <input
    id={id}
        required={true}
        type={text}
        readOnly={readOnly}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classname}
    />
    </div>
    </>
  );
};

export default InputFeild;