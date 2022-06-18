import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropDown = ({ Heading, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // For showcasing input

  return (
    <div className="flex flex-col items-start justify-start">
      <div>
        <p className="font-inter py-2 text-[15px] leading-6">{Heading}</p>
        <button
          className={`inline-flex items-center tracking-tight text-[13px] focus:border-2 font-inter focus:border-indigo-500 text-slate-400 justify-between w-[270px] rounded-xl border border-gray-400 pl-[20px] h-[50px] py-[20px]`}
        >
          {value}
        </button>
      </div>
    </div>
  );
};

export default DropDown;
