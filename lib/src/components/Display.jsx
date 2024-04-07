import React from "react";

function Display({ word }) {
  console.log("hey");
  return (
    <>
      
      <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex flex-col items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium underline">
                    {word}
                  </h2>
                </div>
              </div>
            </div>
            </div>
          
      
      {console.log("hihaa")}
    </>
  );
}

export default Display;
