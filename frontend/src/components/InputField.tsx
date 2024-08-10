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
}

const InputFeild = ({ text,placeholder, value,maindiv, readOnly = false , onChange, labelclass, classname ,label }:InputProps) => {
  return (<>
    <div className='d-flex flex-column maindiv ' >
    <label  className={` ${labelclass}`}>{label}</label>
    <input
        required
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