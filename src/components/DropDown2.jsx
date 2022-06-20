import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import DropDown from "./DropDown";

const DropDown2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // For showcasing input
  const [input, setInput] = useState("Select your years of Experience");

  return (
    <div className="flex flex-col items-center justify-start">
      <div>
        <p className="font-inter ml-16  py-2 text-[15px] leading-6">
          Years of Experience you have?
        </p>
        <button
          onClick={handleClick}
          className={`inline-flex items-center tracking-tight ml-16 focus:border-2 font-inter focus:border-indigo-500 ${
            input !== "Select your years of Experience"
              ? "text-back"
              : "text-slate-400"
          } justify-between w-[350px] rounded-xl border border-gray-400 pl-[20px] h-[50px] py-[20px]`}
        >
          {input}
          <div className="px-6 flex items-center justify-center">
            <FaChevronDown />
          </div>
        </button>
        {/* Menu Button */}
        {isOpen && (
          <div className="origin-center block z-20 bg-white absolute w-[280px] mt-2 rounded-md shadow-lg focus:outline-none font-inter ">
            <div
              onClick={() => {
                setInput("Fresher");
                setIsOpen(false);
              }}
              className="cursor-pointer text-[14px] block hover:bg-slate-50 py-2 px-4 "
            >
              Fresher
            </div>
            <div
              onClick={() => {
                setInput("1-2 Years");
                setIsOpen(false);
              }}
              className="cursor-pointer text-[14px] block hover:bg-slate-50 py-2 px-4 "
            >
              1-2 Years
            </div>
            <div
              onClick={() => {
                setInput("2-3 Years");
                setIsOpen(false);
              }}
              className="cursor-pointer text-[14px] hover:bg-slate-50 py-2 px-4 "
            >
              2-3 Years
            </div>
            <div
              onClick={() => {
                setInput("3+ Years");
                setIsOpen(false);
              }}
              className="cursor-pointer text-[14px] hover:bg-slate-50 py-2 px-4 "
            >
              3+ Years
            </div>
          </div>
        )}
        {console.log(input)}
        {input === "Fresher" && (
          <div className="ml-16 w-[270px] mt-4">
            <div className="flex flex-row justify-between w-[570px]">
              <div className="col-span-6 sm:col-span-3">
                <DropDown
                  Heading={"Degree"}
                  value={"B.tech/BCA/MCA/M.tech (Latest one will be preferred)"}
                />
              </div>
              <DropDown Heading={"Your College"} value={"DTU/IIT Delhi/NSIT"} />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <DropDown
                Heading={"Your Branch"}
                value={
                  "Computer Engineering/Mechanical Engineering/Civil Engineering"
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown2;
