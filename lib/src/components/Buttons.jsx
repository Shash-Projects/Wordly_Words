import React from 'react'

export default function Buttons(props) {
  return (
    <>
    <section className="text-gray-600 -py- body-font">
        <div className="container px-5 -py-2 mx-auto">
          <div className="flex flex-wrap -m-2 justify-center">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full ">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-slate-50">
                
                <div className="flex-grow ">
                  <h2 className="text-gray-900 title-font font-medium">
                    {props.fword.word}
                  </h2>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
