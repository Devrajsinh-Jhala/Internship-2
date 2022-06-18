import React from "react";
import DropDown from "./DropDown";
import InputElement from "./InputElement";

const FormContainer = () => {
  return (
    <div className="pl-[19.5rem] ">
      <div className="pl-8">
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
                  <DropDown
                    Heading={"Referrer Email Id"}
                    value={"From where you get this form?"}
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <fieldset className="col-span-6">
                    <legend className="block text-sm font-semibold text-gray-700 mb-2">
                      Did you get an offer?
                    </legend>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="Yes"
                          className=" focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 "
                        />
                        <label className=" ml-3 block font-normal text-[15px] leading-6 text-gray-700 ">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="Yes"
                          className=" focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 "
                        />
                        <label className=" ml-3 block font-normal text-[15px] leading-6 text-gray-700 ">
                          No
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <DropDown
                    Heading={"Location Of Company"}
                    value={"Ex - Hyderabad, Seattle, Delhi"}
                  />
                </div>
              </div>

              <div className=" px-4 py-3 bg-gray-50 mt-8 text-right sm:px-6 ">
                <button className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500 ">
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
