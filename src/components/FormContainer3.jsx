import React from "react";
import DropDown from "./DropDown";
import DropDown2 from "./DropDown2";
import RichEditorExample from "../components/RichTextEditor/RichEditorExample";

const FormContainer3 = () => {
  return (
    <div className="pl-[16.5rem] ">
      <div className="">
        <div className="bg-[#f8f8f8]  h-[100vh] flex items-center justify-between">
          <div className="px-4 py-4">
            <div className="px-3 mt-4 py-4 w-[600px] h-[100vh] bg-white">
              <div className="">
                <div className="">
                  <p className="font-inter font-semibold text-[15px] leading-5 mb-2">
                    Top topics you prepared? (Mention atleast 5 with comma
                    seperated)
                  </p>

                  <RichEditorExample
                    value={
                      "Ex - Data Structures, Pointers, OOPS, System Design, Algorithms, Dynamic Programming"
                    }
                  />
                </div>
                <div className="mt-8 mb-10">
                  <DropDown
                    Heading={"Duration Of Preparation (In months)"}
                    value={"Ex- 2.5 months, 6 months"}
                  />
                </div>

                <div className="mt-8">
                  <p className="font-inter font-semibold text-[14px] leading-5 mb-2">
                    Preparation Tips (Mention atleast two tips line seperated)
                  </p>

                  <RichEditorExample
                    value={
                      "Ex - Practice Atleast 250 Questions, Ex - Do atleast 2 projects"
                    }
                  />
                </div>
                <div className=" px-4 py-3 bg-white mt-8 text-right sm:px-6 ">
                  <button className="inline-flex mr-4 font-inter justify-center items-center w-[80px] h-[35px] font-bold border border-transparent shadow-sm  rounded-full text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500 ">
                    Back
                  </button>
                  <button className="inline-flex font-inter justify-center items-center w-[80px] h-[35px] font-bold border border-transparent shadow-sm  rounded-full text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500 ">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer3;
