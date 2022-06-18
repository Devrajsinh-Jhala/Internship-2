import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropDown = ({ Heading, value }) => {
  const [input, setInput] = useState(value);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  // For showcasing input

  return (
    <div className="flex flex-col items-start justify-start">
      <div>
        <p className="font-inter py-2 text-[15px] leading-6">{Heading}</p>
        <input
          value={input}
          onChange={handleChange}
          className={`inline-flex items-center tracking-tight text-[15px] focus:border-2 font-inter focus:border-indigo-500 ${
            input !== value ? "text-black" : "text-slate-400"
          }  justify-between w-[270px] rounded-xl border border-gray-400 pl-[20px] h-[50px] py-[20px]`}
        />
      </div>
    </div>
  );
};

export default DropDown;
