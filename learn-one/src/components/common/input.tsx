import * as React from "react";

export interface InputProps {
  name: string;
  label: string;
  value: any;
  onChange: any;
  error: any;
}

const Input: React.SFC<InputProps> = ({
  name,
  label,
  value,
  error,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        /* ref={() => this.username} */
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
