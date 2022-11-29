import React from "react";

export default function InputGroup({label,type,name , onChangeHandler}) {
  return (
    <div className="mb-3">
      <label for="Email" className="form-label">
        {label}
      </label>
      <input  type={type} className="form-control" name = {name} onchange={onChangeHandler} />
    </div>
  );
} 
