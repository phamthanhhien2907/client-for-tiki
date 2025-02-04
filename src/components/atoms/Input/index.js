import React, { useState } from "react";

const InputField = ({ type, value, setValue, nameKey, style }) => {
  return (
    <div>
      <input
        type={type || "text"}
        placeholder={nameKey}
        value={value}
        className={
          style
            ? style
            : "px-4 py-2 rounded-md border w-[410px] my-4 ml-4 placeholder:text-2xl  outline-none"
        }
        // onChange={(e) =>
        //   setValue((prev) => ({ ...prev, [nameKey]: e.target.value }))
        // }
      />
    </div>
  );
};

export default InputField;
