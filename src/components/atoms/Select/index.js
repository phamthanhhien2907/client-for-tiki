import React, { memo } from "react";
import clsx from "clsx";
const Select = ({
  label,
  disabled,
  register,
  errors,
  id,
  vallidate,
  type = "text",
  placeholder,
  fullWith,
  defaultValue,
  style,
  options = [],
}) => {
  return (
    <div className={clsx("flex flex-col h-[78px] gap-2", style)}>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        id={id}
        {...register(id, vallidate)}
        className={clsx("form-input my-auto", fullWith && "w-full", style)}
        defaultValue={defaultValue}
      >
        <option value="">----Chọn-----</option>
        {options?.map((el) => (
          <option value={el.code}>{el.value}</option>
        ))}
      </select>
      {errors[id] && (
        <small className="text-xs text-red-500">{errors[id]?.message}</small>
      )}
    </div>
  );
};

export default memo(Select);
