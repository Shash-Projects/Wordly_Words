import React, { useCallback, useEffect, useState } from "react";
import Buttons from "./Buttons";

function Saviour() {
  const [input, setInput] = useState("persistence");
  const [type,setType] = useState("rel_syn")
  const [go,setGo] = useState("Synonym")
  const [book, setBook] = useState([]);
  
  const url = "https://api.datamuse.com/words?rel_syn=";

  const aayein = useCallback(
    async (word) => {
      const api = `https://api.datamuse.com/words?${type}=${word}`;
      console.log(type);
      let res = await fetch(api);
      let arr = await res.json();
      console.log(arr);
      setBook(arr);
    },
    [input, go]
  );

  useEffect(() => {
    aayein(input);
  }, [type]);

  const search = () => {
    aayein(input);
  };

  const toggle=()=>{

    if (go==="Synonym") {
      
      setType("rel_hom");
      setGo("Rhyming");
      console.log("hiha "+ type);

    }else{

      setType("rel_syn");
      
      setGo("Synonym");
      
    }
     
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 pt-16 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              "Wordplay Wonderland: Synonyms and Rhymes Galores"
            </h1>
            <p className="mb-8 leading-relaxed text-[#000]" id="search">
              Welcome to our WORD oasis! <br /> Need a different flavour forr
              your sentences or a catchy rhyme for your lines? Dive into our
              collection of synonyms and rhymes. It's like a thesaurus had a
              baby, but way more helpful. Let's add some zest from your language
              without the unecessary frills.
            </p>
            
            <div className="flex w-full justify-center items-end">
            <button
                className="inline-flex text-white bg-[#344] border-0 py-2 px-6 mr-8 focus:outline-none hover:bg-[#112109] rounded text-lg"
                onClick={toggle}
              >{go}
              </button>
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-[#314157]"
                >
                  Type Your Word
                </label>
                <input
                  type="text"
                  placeholder="persistence"
                  id="search-field"
                  name="hero-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-green-950 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors mr-0 duration-200 ease-in-out"
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
              <button
                className="inline-flex text-white bg-[#344]  border-0 py-2 px-6  focus:outline-none hover:bg-[#112109] rounded text-lg"
                onClick={search}
              >
                Search
              </button>
            </div>
            <p className="text-sm mt-2 text-[#314157] mb-86 w-full">
              " We help you find expression to your words "
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
      <div className="container px-5  mx-auto">
          
     
            {
              book.length? 
                book.map((fword) => {
                  return <Buttons fword={fword} />;
                })

              : <h1 className="flex text-2xl pb-8 text-slate-50 justify-center w-full">OOPs...." No Result found "</h1>
                
              
            }
            </div>
            
        
       </section>     
    </>
  );
}

export default Saviour;
