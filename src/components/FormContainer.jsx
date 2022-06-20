import React from "react";
import DropDown from "./DropDown";

const FormContainer = () => {
  return (
    <div className="pl-[16.5rem] ">
      <div className="">
        <div className="bg-[#f8f8f8]  h-[100vh] flex items-center">
          <div className="px-4 py-4">
            <div className="px-3 mt-4 py-4 w-[600px] h-[100vh] bg-white">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <DropDown
                    Heading={"Company you applied to?"}
                    value={"Ex - Amazon, Google, Microsoft"}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <DropDown
                    Heading={"Role for which you applied?"}
                    value={"Ex- SDE-1, SDE-2 or SDE-Intern"}
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <fieldset className="col-span-6 font-inter">
                    <legend className="block font-inter font-semibold text-[14px] text-gray-900 mb-2">
                      Did you get an offer?
                    </legend>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="Yes"
                          className=" focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 "
                        />
                        <label className=" ml-3 block font-normal text-[15px] leading-5 text-black ">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="Yes"
                          className=" focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 "
                        />
                        <label className=" ml-3 block font-normal text-[14px] leading-5 text-black ">
                          No
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <DropDown
                    Heading={"Location of company"}
                    value={"Ex - Hyderabad, Seattle, Delhi"}
                  />
                </div>
              </div>

              <div className=" px-4 py-3 bg-white mt-8 text-right sm:px-6 ">
                <button className="inline-flex font-inter justify-center items-center w-[80px] h-[35px] font-bold border border-transparent shadow-sm  rounded-full text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500 ">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
