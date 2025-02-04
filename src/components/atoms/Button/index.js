import React, { memo } from "react";

const Button = ({ name, handleOnclick, style, iconsBefore, iconAfter, fw }) => {
  return (
    <button
      type="button"
      className={
        style
          ? style
          : `${
              fw ? "w-full" : "w-[410px] px-4 ml-4"
            } px-4 py-2 rounded-md text-white bg-red-500 hover:bg-gray-700`
      }
      onClick={() => {
        handleOnclick && handleOnclick();
      }}
    >
      {iconsBefore}
      <span>{name}</span>
      {iconAfter}
    </button>
  );
};

export default memo(Button);
