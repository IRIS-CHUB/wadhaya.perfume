
import React from "react";

const Button = ({
  text,
  bgColor = "bg-primary",
  textColor = "text-white",
  hocolor,
  border = "",
  w = "",
  handler,
  handleClick,
}) => {
  const onClick = handler || handleClick || (() => {});

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${bgColor} ${textColor} ${w} border ${border} cursor-pointer ${
        hocolor ? `hover:bg-${hocolor}` : ""
      } hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 dark:bg-brandWhite dark:text-primary`}
    >
      {text}
    </button>
  );
};

export default Button;
